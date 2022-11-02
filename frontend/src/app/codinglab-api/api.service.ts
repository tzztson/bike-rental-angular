import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Service } from '@feathersjs/feathers';
import { Router } from '@angular/router';
import { Subject, ReplaySubject } from 'rxjs';
import { UserModel } from './models/UserModel';

import * as feathersRx from 'feathers-reactive';
import feathers from '@feathersjs/feathers';
import feathersAuthClient from '@feathersjs/authentication-client';
import { AppConfigService } from './app-config.service';
import rest from '@feathersjs/rest-client';
import { isPlatformBrowser } from '@angular/common';

import fetch from 'cross-fetch';

export interface AuthenticatedPayload {
  strategy: string;
  authentication: {
    strategy: 'jwt' | 'local';
    accessToken: string;
    payload: any; // authentication protocol information that might not be useful
  };
  user: UserModel;
}

export interface ErrorPayload {
  code: number;
  name: string;
  message: string;
  className: string;
  errors: Object;
  data: {
    code: string;
    message: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private app: any = feathers();
  private accessToken: string;
  private currentUser: Subject<UserModel> = new ReplaySubject<UserModel>(1);

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: any,
    private router: Router,
    private appConfigService: AppConfigService,
  ) {
    // Set up Socket.io client with the socket

    this.app.configure(rest);

    // Connect to a different URL
    const restClient = rest(this.appConfigService.getConfig());
    if (isPlatformBrowser(this.platformId)) {
      // Configure an AJAX library (see below) with that client
      this.app.configure(restClient.fetch(window.fetch));
    } else {
      this.app.configure(restClient.fetch(fetch));
    }

    // this.app.configure(feathersSocketIOClient(this.socket));

    // Available options are listed in the "Options" section
    this.app
      .configure(
        feathersAuthClient({
          storageKey: 'feathers-jwt',
          jwtStrategy: 'jwt',
        }),
      )
      .configure(
        feathersRx({
          // add feathers-reactive plugin
          idField: 'id',
        }),
      );
  }

  createService(serviceName: string): Service<any> {
    return this.app.service(serviceName);
  }

  authenticate(): Promise<boolean> {
    return this.app
      .authenticate()
      .then((payload: AuthenticatedPayload) => {
        this.accessToken = payload.authentication.accessToken;
        this.currentUser.next(new UserModel(payload.user));
        // show application page
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  login(email: string, password: string, silent: boolean = false): Promise<AuthenticatedPayload | ErrorPayload> {
    // Authenticate with the local email/password strategy
    return this.app
      .authenticate({
        strategy: 'local',
        email: email,
        password: password,
      })
      .then((payload: AuthenticatedPayload) => {
        this.accessToken = payload.authentication.accessToken;
        this.currentUser.next(payload.user);

        if (silent) {
          return payload;
        }

        return this.router
          .navigate(['/'])
          .then(() => payload.user)
          .catch((error) => error);
      });
  }

  getCurrentUser(): Subject<UserModel> {
    return this.currentUser;
  }

  getAccessToken(): Promise<string> {
    return this.app.authentication.getAccessToken();
  }

  async logout(shouldCreateJob: boolean = false, silent: boolean = false) {
    this.app.logout();
    this.currentUser.next(null);

    if (shouldCreateJob) {
      return await this.router.navigate(['/signup'], { queryParams: { backToUrl: '/jobs/my-jobs/create' } });
    }

    if (silent === false) {
      await this.router.navigate(['/landing']);
    }
  }
}

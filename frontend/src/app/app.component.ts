import { Subscription } from 'rxjs';
import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot, Event } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

import { ApiService, UserModel } from './codinglab-api';
import { environment } from '../environments/environment';
import { ExposeToCypressService } from './codinglab-api/expose-to-cypress.service';
import { filter } from 'rxjs/operators';

// google analytics function
// Todo: uncomment and fix gtag not defined while running npm run prerender
// declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel';
  url: string;
  activeComponent = null;

  user: UserModel;
  user$: Subscription;
  isHideHead: boolean;
  isHideFooter: boolean;
  colorOfFooter: 'grey' | 'white' = 'grey';

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private translate: TranslocoService,
    private apiService: ApiService,
    private exposeToCypress: ExposeToCypressService,
  ) {
    this.exposeToCypress.exposeServices();
    this.user$ = this.apiService.getCurrentUser().subscribe((user: UserModel) => {
      if (!user) {
        return;
      }
      this.user = user;
      this.translate.setActiveLang(this.user.language);
      this.translate.setDefaultLang(this.user.language);
    });
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const snapshot = this.getLastSnapshotChild(this.route.snapshot);
        this.isHideHead = snapshot.data.hideNavigation;
        this.isHideFooter = snapshot.data.hideFooter;
        this.colorOfFooter = snapshot.data.colorOfFooter || 'grey';
        // google analytics
        if (environment.production) {
          // gtag('config', environment.googleAnalyticsId, {
          //   page_path: event.urlAfterRedirects,
          // });
        }

        this.url = event.url;
        if (this.isGuestUrl(this.url)) {
          this.applyGuestTheme();
        } else {
          this.applyDashboardTheme();
        }
      });
  }

  public onRouterOutletActivate(event: any) {
    this.activeComponent = event;
  }

  applyGuestTheme() {
    this.renderer.addClass(document.body, 'user-ath');
    this.renderer.removeClass(document.body, 'user-dashboard');
  }

  applyDashboardTheme() {
    this.renderer.addClass(document.body, 'user-dashboard');
    this.renderer.removeClass(document.body, 'user-ath');
  }

  isGuestUrl(url: string): boolean {
    if (!url) {
      return true;
    }
    if (
      url === '/login' ||
      url === '/signup' ||
      url === '/forgot-password' ||
      url === '/forgot-password/forgot-password-success' ||
      url.startsWith('/signup/') ||
      url.startsWith('/signup/signup-success') ||
      url.startsWith('/login') ||
      url.startsWith('/signup/verify-email/') ||
      url.startsWith('/forgot-password/') ||
      this.activeComponent.constructor.name === 'NotFoundComponent' ||
      this.activeComponent.constructor.name === 'ContactSupportComponent'
    ) {
      return true;
    }

    return false;
  }

  private getLastSnapshotChild(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    while (snapshot.firstChild) {
      snapshot.firstChild.data = {
        ...snapshot.data,
        ...snapshot.firstChild.data,
      };

      snapshot = snapshot.firstChild;
    }
    return snapshot;
  }
}

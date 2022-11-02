import { Injectable, NgZone } from '@angular/core';
import { ApiService } from './api.service';
import { JobsService } from './model-services/jobs.service';
import { Router } from '@angular/router';
import { InformationService } from './model-services/information.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExposeToCypressService {
  constructor(
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private jobsService: JobsService,
    private informationService: InformationService,
  ) {}

  public exposeServices() {
    // by adding 'ApiService' etc. it helps against minified names, it preserves the names
    this.exposeToCypress(this.apiService, 'ApiService');
    this.exposeToCypress(this.jobsService, 'JobsService');
    this.exposeToCypress(this.informationService, 'InformationService');

    (window as any).navigateByUrl = this.navigateByUrl;
    (window as any).servicesExposed = true;
  }

  private exposeToCypress(serviceInstance: any, serviceName: string) {
    if (!environment.production) {
      window[serviceName] = serviceInstance;
    }
  }

  private async navigateByUrl(url: string) {
    await this.ngZone.run(async () => {
      await this.router.navigateByUrl(url);
    });
  }
}

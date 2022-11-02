import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config: any;
  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http
      .get('./assets/config/url.config.json')
      .toPromise()
      .then((config: any) => {
        this.config = config.backendUrl;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
  getConfig(): string {
    return this.config;
  }
}

import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { FreelancerSettingsModel } from '..';

@Injectable({
  providedIn: 'root',
})
export class FreelancerSettingsService extends BaseService<FreelancerSettingsModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'freelancer_settings');
  }
}

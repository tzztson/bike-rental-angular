import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { FreelancerInfoModel } from '..';

@Injectable({
  providedIn: 'root',
})
export class FreelancerInfoService extends BaseService<FreelancerInfoModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'freelancer_info');
  }
}

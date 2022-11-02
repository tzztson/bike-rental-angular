import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { JobModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class JobsService extends BaseService<JobModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'jobs');
  }
}

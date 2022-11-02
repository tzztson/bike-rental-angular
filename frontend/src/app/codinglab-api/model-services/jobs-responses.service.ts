import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { JobResponseModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class JobsResponsesService extends BaseService<JobResponseModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'job-responses');
  }
}

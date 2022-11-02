import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { TimeLogModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class TimeLogService extends BaseService<TimeLogModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'time-logs');
  }
}

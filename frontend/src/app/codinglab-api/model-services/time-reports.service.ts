import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { TimeReportModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class TimeReportService extends BaseService<TimeReportModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'time-reports');
  }
}

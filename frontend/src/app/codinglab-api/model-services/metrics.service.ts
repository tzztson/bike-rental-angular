import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { MetricModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class MetricsService extends BaseService<MetricModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'metrics');
  }
}

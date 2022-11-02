import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { NotificationModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class NotificationService extends BaseService<NotificationModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'notification');
  }
}

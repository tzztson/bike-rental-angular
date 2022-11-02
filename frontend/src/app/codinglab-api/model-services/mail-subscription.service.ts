import { Injectable } from '@angular/core';

import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { MailSubscription } from '../models/MailSubscription';

@Injectable({
  providedIn: 'root',
})
export class MailSubscriptionService extends BaseService<MailSubscription> {
  constructor(apiService: ApiService) {
    super(apiService, 'mailing_subscription');
  }
}

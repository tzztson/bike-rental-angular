import { TestBed } from '@angular/core/testing';

import { MailSubscriptionService } from './mail-subscription.service';

describe('MailSubscriptionService', () => {
  let service: MailSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

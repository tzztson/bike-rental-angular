import { TestBed } from '@angular/core/testing';

import { FreelancerSettingsService } from './freelancer-settings.service';

describe('FreelancerSettingsService', () => {
  let service: FreelancerSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

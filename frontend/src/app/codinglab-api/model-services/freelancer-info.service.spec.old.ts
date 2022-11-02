import { TestBed } from '@angular/core/testing';

import { FreelancerInfoService } from './freelancer-info.service';

describe('FreelancerInfoService', () => {
  let service: FreelancerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

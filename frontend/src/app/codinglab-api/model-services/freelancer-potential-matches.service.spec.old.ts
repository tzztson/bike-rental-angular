import { TestBed } from '@angular/core/testing';

import { FreelancerPotentialMatchesService } from './freelancer-potential-matches.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('FreelancerPotentialMatchesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({
          config: {
            tokenGetter: () => '',
          },
        }),
      ],
    }),
  );

  it('should be created', () => {
    const service: FreelancerPotentialMatchesService = TestBed.get(FreelancerPotentialMatchesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CompaniesService } from './companies.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('CompaniesService', () => {
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
    const service: CompaniesService = TestBed.get(CompaniesService);
    expect(service).toBeTruthy();
  });
});

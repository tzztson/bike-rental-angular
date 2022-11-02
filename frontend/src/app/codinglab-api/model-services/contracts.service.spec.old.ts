import { TestBed } from '@angular/core/testing';

import { ContractsService } from './contracts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('ContractsService', () => {
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
    const service: ContractsService = TestBed.get(ContractsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InformationService } from './information.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('InformationService', () => {
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
    const service: InformationService = TestBed.get(InformationService);
    expect(service).toBeTruthy();
  });
});

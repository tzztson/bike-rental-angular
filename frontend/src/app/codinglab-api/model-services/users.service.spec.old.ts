import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('UsersService', () => {
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
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});

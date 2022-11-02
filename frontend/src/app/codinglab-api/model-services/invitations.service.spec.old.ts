import { TestBed } from '@angular/core/testing';

import { InvitationsService } from './invitations.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('InvitationsService', () => {
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
    const service: InvitationsService = TestBed.get(InvitationsService);
    expect(service).toBeTruthy();
  });
});

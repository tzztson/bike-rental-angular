import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({
          config: {
            tokenGetter: () => '',
          },
        }),
      ],
      providers: [MessagesService],
    });
  });

  it('should ...', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});

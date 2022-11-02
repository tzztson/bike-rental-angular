import { TestBed } from '@angular/core/testing';

import { JobsResponsesService } from './jobs-responses.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';

describe('JobsResponsesService', () => {
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
    const service: JobsResponsesService = TestBed.get(JobsResponsesService);
    expect(service).toBeTruthy();
  });
});

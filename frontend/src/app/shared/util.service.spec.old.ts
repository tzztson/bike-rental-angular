import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoModule } from '@ngneat/transloco';
import { InformationService } from '../codinglab-api/model-services/information.service';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterTestingModule } from '@angular/router/testing';
import { SnackbarService } from '../page-partials/services/snackbar/snackbar.service';

describe('UtilService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        TranslocoModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => '',
          },
        }),
      ],
      providers: [TranslateService, SnackbarService, InformationService],
    }),
  );

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });
});

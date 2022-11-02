import { TranslocoService } from '@ngneat/transloco';

import { ErrorPayload } from '../../codinglab-api';
import { UserErrorCode } from '../../codinglab-api/enums/userErrorCodes';
import { Injectable } from '@angular/core';
import { JobErrorCodes } from '../../codinglab-api/enums/jobErrorCodes';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandler {
  constructor(private translateService: TranslocoService) {}

  message(error: ErrorPayload, email?: string): string {
    if (!error.data?.code) {
      return error.message;
    }
    switch (error.data.code) {
      case UserErrorCode.EmailInUse: {
        return this.translateService.translate('serverErrorMessages.messages.email-already-in-use', { email });
      }
      case JobErrorCodes.AlreadyApplied: {
        return this.translateService.translate('serverErrorMessages.messages.already-applied-job');
      }
      case JobErrorCodes.InvalidJobId: {
        return this.translateService.translate('serverErrorMessages.messages.invalid-jobId');
      }
      case JobErrorCodes.JobNotAuthorized: {
        return this.translateService.translate('serverErrorMessages.messages.not-exist-job');
      }
      case JobErrorCodes.InvalidStatus: {
        return this.translateService.translate('serverErrorMessages.messages.invalid-status');
      }
      case JobErrorCodes.InvalidHourlyRate: {
        return this.translateService.translate('serverErrorMessages.messages.invalid-hourlyRate');
      }
      case JobErrorCodes.InvalidResume: {
        return this.translateService.translate('serverErrorMessages.messages.invalid-resume');
      }
      case JobErrorCodes.InvalidMotivation: {
        return this.translateService.translate('serverErrorMessages.messages.invalid-motivation');
      }
      case JobErrorCodes.InvalidPhone: {
        return this.translateService.translate('serverErrorMessages.messages.invalid-phone');
      }
      default: {
        return error.data.message;
      }
    }
  }
}

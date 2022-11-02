import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { VerificationCodeModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class VerificationCodesService extends BaseService<VerificationCodeModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'verification-codes');
  }
}

import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { ResetPasswordModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService extends BaseService<ResetPasswordModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'reset-password');
  }
}

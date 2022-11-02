import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { UserModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService<UserModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'users');
  }
}

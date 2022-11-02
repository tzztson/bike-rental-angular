import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ClientInfoModel } from '..';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class ClientInfoService extends BaseService<ClientInfoModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'client_info');
  }
}

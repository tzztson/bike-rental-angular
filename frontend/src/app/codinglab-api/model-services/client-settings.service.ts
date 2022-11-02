import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { ClientSettingsModel } from '../models/ClientSettingsModel';

@Injectable({
  providedIn: 'root',
})
export class ClientSettingsService extends BaseService<ClientSettingsModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'client_settings');
  }
}

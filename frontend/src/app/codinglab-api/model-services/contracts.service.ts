import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { ContractModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class ContractsService extends BaseService<ContractModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'contracts');
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { ContactModel } from '..';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseService<ContactModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'contact');
  }
}

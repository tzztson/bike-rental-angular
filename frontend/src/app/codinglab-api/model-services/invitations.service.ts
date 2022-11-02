import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from '../api.service';
import { InvitationModel } from '..';
@Injectable({
  providedIn: 'root',
})
export class InvitationsService extends BaseService<InvitationModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'invitations');
  }
}

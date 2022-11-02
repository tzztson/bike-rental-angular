import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { Paginated } from '@feathersjs/feathers';
import { Observable } from 'rxjs';
import { Sort } from '../../shared/constants';
import { MessageModel } from '..';
@Injectable()
export class MessagesService extends BaseService<MessageModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'messages');
  }

  messages$(invitationId: number): Observable<any[] | Paginated<any>> {
    return this.service.watch().find({
      query: {
        invitationId: invitationId,
        $sort: { createdAt: Sort.Descending },
        $limit: 25,
      },
    });
  }
}

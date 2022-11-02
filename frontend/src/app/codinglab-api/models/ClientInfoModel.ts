import { BaseModel } from './BaseModel';

export class ClientInfoModel extends BaseModel {
  id: number;
  userId: number;

  constructor(clientInfo: any = {}) {
    super(clientInfo);
    this.id = this.numberOrNull(clientInfo.id);
    this.userId = clientInfo.userId;
  }
}

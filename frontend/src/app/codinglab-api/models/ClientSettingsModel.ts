import { BaseModel } from './BaseModel';

export class ClientSettingsModel extends BaseModel {
  id: number;
  userId: number;

  constructor(clientSettings: any = {}) {
    super(clientSettings);
    this.id = this.numberOrNull(clientSettings.id);
    this.userId = clientSettings.userId;
  }
}

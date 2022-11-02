import { BaseModel } from './BaseModel';

export enum MessageType {
  Text = 'text',
  Hired = 'hired',
  Invited = 'invited',
}

export class MessageModel extends BaseModel {
  text: string;
  invitationId: number;
  attachment: string;
  messageType: MessageType;
  userId: number;
  constructor(object: any = {}) {
    super(object);
    this.text = this.stringOrNull(object.text);
    this.invitationId = this.numberOrNull(object.invitationId);
    this.attachment = this.stringOrNull(object.attachment);
    this.messageType = <MessageType>this.stringOrNull(object.messageType);
    this.userId = this.numberOrNull(object.userId);
  }
}

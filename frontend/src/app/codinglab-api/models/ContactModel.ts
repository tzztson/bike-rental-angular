import { BaseModel } from './BaseModel';

export class ContactModel extends BaseModel {
  id: number;
  name: string;
  email: string;
  category: string;
  message: string;

  constructor(object: any = {}) {
    super(object);
    this.id = this.numberOrNull(object.id);
    this.name = this.stringOrNull(object.name);
    this.email = this.stringOrNull(object.email);
    this.category = this.stringOrNull(object.category);
    this.message = this.stringOrNull(object.message);
  }
}

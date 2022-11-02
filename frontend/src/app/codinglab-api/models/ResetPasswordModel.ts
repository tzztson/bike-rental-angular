import { BaseModel } from './BaseModel';

export class ResetPasswordModel extends BaseModel {
  code: string;
  password?: string;
  repeatPassword: string;
  email?: string;
  // tslint:disable-next-line:identifier-blacklist
  constructor(object: any = {}) {
    super(object);
    this.repeatPassword = this.stringOrNull(object.repeatPassword);
    this.code = this.stringOrNull(object.code);
    this.password = this.stringOrNull(object.password);
    this.email = this.stringOrNull(object.email);
  }
}

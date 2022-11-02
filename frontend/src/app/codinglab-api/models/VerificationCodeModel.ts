import { BaseModel } from './BaseModel';

export enum VerificationCodeType {
  VerifyEmail = 1,
  ResetPassword = 2,
}

export class VerificationCodeModel extends BaseModel {
  code: string;
  expirationDate: Date;
  userId: number;
  type: VerificationCodeType;
  isUsedOrInvalid: boolean;
  email?: string;

  constructor(model: any = {}) {
    super(model);
    this.code = this.stringOrNull(model.code);
    this.expirationDate = this.dateOrNull(model.expirationDate);
    this.userId = this.numberOrNull(model.userId);
    this.type = <VerificationCodeType>this.numberOrNull(model.type);
    this.isUsedOrInvalid = model.isUsedOrInvalid;
    this.email = this.stringOrNull(model.email);
  }
}

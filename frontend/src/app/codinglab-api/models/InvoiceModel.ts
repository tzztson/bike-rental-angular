import { BaseModel } from './BaseModel';

export class InvoiceModel extends BaseModel {
  kvkNumber: number;
  vatNumber: number;
  bankAccount: string;
  companyName: string;
  address: string;
  zipCode: string;
  location: string;
  mimeType: string;
  logo: string;
  invoiceLogo: string;

  constructor(object: any = {}) {
    super(object);
    this.kvkNumber = this.numberOrNull(object.kvkNumber);
    this.vatNumber = this.numberOrNull(object.vatNumber);
    this.bankAccount = this.stringOrNull(object.bankAccount);
    this.companyName = this.stringOrNull(object.companyName);
    this.address = this.stringOrNull(object.address);
    this.zipCode = this.stringOrNull(object.zipCode);
    this.location = this.stringOrNull(object.location);
  }
}

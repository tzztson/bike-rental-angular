import { BaseModel } from './BaseModel';

export class CompanyModel extends BaseModel {
  id: number;
  name: string;
  website: string;

  constructor(object: any = {}) {
    super(object);
    this.id = this.numberOrNull(object.id);
    this.name = this.stringOrNull(object.name);
    this.website = this.stringOrNull(object.website);
  }
}

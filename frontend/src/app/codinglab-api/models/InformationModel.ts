import { BaseModel } from './BaseModel';

export enum InformationType {
  Position = 'position',
  Technology = 'technology',
  Location = 'location',
  Industry = 'industry',
}

export class InformationModel extends BaseModel {
  id: number;
  name: string;
  fullName: string;
  keywords: string;
  category: string;
  icon: string;
  type: InformationType;

  constructor(informationObject: InformationModel) {
    super(informationObject);
    this.id = this.numberOrNull(informationObject.id);
    this.name = this.stringOrNull(informationObject.name);
    this.fullName = this.stringOrNull(informationObject.fullName);
    this.keywords = this.stringOrNull(informationObject.keywords);
    this.category = this.stringOrNull(informationObject.category);
    this.icon = this.stringOrNull(informationObject.icon);
    this.type = <InformationType>this.stringOrNull(informationObject.type);
  }
}

import { BaseModel } from './BaseModel';

export class TimeLogModel extends BaseModel {
  id: number;
  contractId: number;
  clientId: number;
  freelancerId: number;
  description: string;
  date: Date;
  hoursWorked: string;
  hourlyRate: number;
  amountBilled: number;

  constructor(timeLog: any = {}) {
    super(timeLog);
    this.id = this.numberOrNull(timeLog.id);
    this.contractId = this.numberOrNull(timeLog.contractId);
    this.clientId = this.numberOrNull(timeLog.clientId);
    this.description = this.stringOrNull(timeLog.description);
    this.date = this.dateOrNull(timeLog.date);
    this.hoursWorked = this.stringOrNull(timeLog.hoursWorked);
    this.hourlyRate = this.numberOrNull(timeLog.hourlyRate);
    this.freelancerId = this.numberOrNull(timeLog.freelancerId);
  }
}

import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { JobModel } from './JobModel';
import { InvoiceModel } from './InvoiceModel';

export enum ContractStatus {
  Pending = 'pending',
  NeedsReview = 'needs-review',
  InProgress = 'inprogress',
  Ended = 'ended',
}

export class ContractModel extends BaseModel {
  id: number;
  jobId: number;
  clientId: number;
  freelancerId: number;
  status: ContractStatus;
  startDate: Date;
  endDate: Date;
  client: UserModel;
  freelancer: UserModel;
  job: JobModel;
  freelancerHasSigned: boolean;
  clientHasSigned: boolean;
  freelancerInvoice: InvoiceModel;
  clientInvoice: InvoiceModel;
  clientContract: string;
  freelancerContract: string;
  contractEndDescription: string;

  constructor(object: any = {}) {
    super(object);
    this.id = this.numberOrNull(object.id);
    this.jobId = this.numberOrNull(object.jobId);
    this.clientId = this.numberOrNull(object.clientId);
    this.freelancerId = this.numberOrNull(object.freelancerId);
    this.status = <ContractStatus>this.stringOrNull(object.status);
    this.startDate = this.dateOrNull(object.startDate);
    this.endDate = this.dateOrNull(object.endDate);
    this.client = object.client;
    this.freelancer = object.freelancer;
    this.job = object.job;
    this.freelancerInvoice = object.freelancerInvoice;
    this.clientInvoice = object.clientInvoice;
    this.freelancerHasSigned = object.freelancerHasSigned;
    this.clientHasSigned = object.clientHasSigned;
    this.clientContract = this.stringOrNull(object.clientContract);
    this.freelancerContract = this.stringOrNull(object.freelancerContract);
    this.contractEndDescription = this.stringOrNull(object.contractEndDescription);
  }
}

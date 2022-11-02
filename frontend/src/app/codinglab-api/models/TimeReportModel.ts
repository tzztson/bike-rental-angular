import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { JobModel } from './JobModel';

export enum ReportStatus {
  Pending = 'pending',
  Sent = 'sent',
  Approved = 'approved',
  Declined = 'declined',
}

export enum BillingStatus {
  Pending = 'pending',
  Send = 'send',
  Paid = 'paid',
}

export class TimeReportModel extends BaseModel {
  id: number;
  contractId: number;
  jobId: number;
  month: number;
  year: number;
  status: ReportStatus;
  reportSentDate: Date;
  clientComments: string;
  freelancerInvoice: string;
  invoiceNumber: string;
  clientId: number;
  freelancerId: number;
  client: UserModel;
  freelancer: UserModel;
  job: JobModel;
  billingStatus: BillingStatus;
  dateDiff: number;
  totalHours: string;
  totalAmount: number;

  constructor(timeReport: any = {}) {
    super(timeReport);
    this.id = this.numberOrNull(timeReport.id);
    this.contractId = this.numberOrNull(timeReport.contractId);
    this.jobId = this.numberOrNull(timeReport.JobId);
    this.month = this.numberOrNull(timeReport.month);
    this.year = this.numberOrNull(timeReport.year);
    this.status = <ReportStatus>this.stringOrNull(timeReport.status);
    this.reportSentDate = this.dateOrNull(timeReport.reportSentDate);
    this.clientComments = this.stringOrNull(timeReport.clientComments);
    this.freelancerInvoice = this.stringOrNull(timeReport.freelancerInvoice);
    this.invoiceNumber = this.stringOrNull(timeReport.invoiceNumber);
    this.clientId = this.numberOrNull(timeReport.clientId);
    this.freelancerId = this.numberOrNull(timeReport.freelancerId);
    this.client = timeReport.client;
    this.freelancer = timeReport.freelancer;
    this.job = timeReport.job;
    this.billingStatus = <BillingStatus>this.stringOrNull(timeReport.billingStatus);
  }
}

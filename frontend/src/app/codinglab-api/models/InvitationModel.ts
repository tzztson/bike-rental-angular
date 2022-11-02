import { BaseModel } from './BaseModel';
import { JobModel } from './JobModel';
import { UserModel } from './UserModel';
import { JobResponseModel } from './JobResponseModel';

export enum InvitationMethod {
  None = 'none',
  OnsiteInterview = 'onsite interview',
  PhoneInterview = 'phone interview',
  CodingChallenge = 'coding challenge',
}

export enum InvitationStatus {
  Pending = 'pending',
  Sent = 'sent',
  Rejected = 'rejected',
  Hired = 'hired',
}

export class InvitationModel extends BaseModel {
  id: number;
  clientId: number;
  freelancerId: number;
  jobId: number;
  jobResponseId: number;
  method: InvitationMethod;
  invitationStatus: InvitationStatus;
  description: string;
  location: string;
  date: Date;
  deadLine: Date;
  clientAttachment: string;
  freelancerAttachment: string;
  freelancerHasAccepted: boolean;
  codeUrl: string;
  clientComment: string;
  freelancerComment: string;
  client: UserModel;
  freelancer: UserModel;
  job: JobModel;
  jobResponse: JobResponseModel;

  constructor(invitation: any = {}) {
    super(invitation);
    this.id = this.numberOrNull(invitation.id);
    this.clientId = this.numberOrNull(invitation.clientId);
    this.freelancerId = this.numberOrNull(invitation.freelancerId);
    this.jobId = this.numberOrNull(invitation.jobId);
    this.jobResponseId = this.numberOrNull(invitation.jobResponseId);
    this.method = <InvitationMethod>this.stringOrNull(invitation.method);
    this.invitationStatus = <InvitationStatus>this.stringOrNull(invitation.invitationStatus);
    this.description = this.stringOrNull(invitation.description);
    this.location = this.stringOrNull(invitation.location);
    this.date = this.dateOrNull(invitation.date);
    this.deadLine = this.dateOrNull(invitation.deadLine);
    this.clientAttachment = this.stringOrNull(invitation.clientAttachment);
    this.freelancerAttachment = this.stringOrNull(invitation.freelancerAttachment);
    this.freelancerHasAccepted = invitation.freelancerHasAccepted;
    this.codeUrl = this.stringOrNull(invitation.codeUrl);
    this.clientComment = this.stringOrNull(invitation.clientComment);
    this.freelancerComment = this.stringOrNull(invitation.freelancerComment);
    this.client = invitation.client;
    this.freelancer = invitation.freelancer;
    this.job = invitation.job;
    this.jobResponse = invitation.jobResponse;
  }
}

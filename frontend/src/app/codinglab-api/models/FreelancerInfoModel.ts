import { BaseModel } from './BaseModel';

export class FreelancerInfoModel extends BaseModel {
  id: number;
  userId: number;
  hasApplied: boolean;
  freelancerCompanyName: string;
  phone: string;
  location: string | number;
  positions: Array<number>;
  technologies: Array<number>;
  industries: Array<number>;
  resume: string;
  startDate: Date;
  profilePicture: string;
  profilePictureUrl: string;
  minWorkingHours: number;
  maxWorkingHours: number;
  remotePossible: number | boolean;
  minHourlyRate: number;
  locationId?: number;
  lastCompletedStep?: number;
  createdAt: Date;
  updatedAt: Date;
  fullName?: string;
  isOnline?: boolean;
  position: string;
  preferredRate: number;
  lastActiveAt?: Date;

  // custom properties
  workingHours: number[];

  constructor(freelancerInfo: FreelancerInfoModel) {
    super(freelancerInfo);
    this.id = this.numberOrNull(freelancerInfo.id);
    this.userId = freelancerInfo.userId;
    this.hasApplied = !!freelancerInfo.hasApplied;
    this.freelancerCompanyName = this.stringOrNull(freelancerInfo.freelancerCompanyName);
    this.phone = this.stringOrNull(freelancerInfo.phone);
    this.lastCompletedStep = freelancerInfo.lastCompletedStep;
    this.location = this.stringOrNull(freelancerInfo.location);
    this.locationId = freelancerInfo.locationId;
    this.startDate = freelancerInfo.startDate;
    this.positions = this.arrayOrEmpty(freelancerInfo?.positions);
    this.technologies = this.arrayOrEmpty(freelancerInfo?.technologies);
    this.industries = this.arrayOrEmpty(freelancerInfo?.industries);
    this.resume = this.stringOrNull(freelancerInfo.resume);
    this.minWorkingHours = this.numberOrNull(freelancerInfo.minWorkingHours);
    this.maxWorkingHours = this.numberOrNull(freelancerInfo.maxWorkingHours);
    this.remotePossible = freelancerInfo.remotePossible;
    this.minHourlyRate = this.numberOrNull(freelancerInfo.minHourlyRate);
    this.createdAt = freelancerInfo.createdAt;
    this.updatedAt = freelancerInfo.updatedAt;
    this.profilePicture = freelancerInfo.profilePicture;
    this.profilePictureUrl = freelancerInfo.profilePictureUrl;
    this.fullName = freelancerInfo.fullName;
    this.isOnline = freelancerInfo.isOnline;
    this.preferredRate = freelancerInfo.preferredRate;
    this.lastActiveAt = freelancerInfo.lastActiveAt;
  }
}

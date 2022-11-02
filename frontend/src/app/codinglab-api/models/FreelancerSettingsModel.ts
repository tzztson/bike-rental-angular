import { BaseModel } from './BaseModel';

export class FreelancerSettingsModel extends BaseModel {
  id: number;
  userId: number;
  receivePotentialJobs: boolean;

  constructor(freelancerSettings: any = {}) {
    super(freelancerSettings);
    this.id = this.numberOrNull(freelancerSettings.id);
    this.userId = freelancerSettings.userId;
    this.receivePotentialJobs = !!freelancerSettings.remotePossible;
  }
}

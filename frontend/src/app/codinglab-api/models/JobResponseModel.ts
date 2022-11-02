import { BaseModel } from './BaseModel';
import { JobModel } from './JobModel';
import { UserModel } from './UserModel';
import { InformationModel } from './InformationModel';

export enum JobResponseStatus {
  Incomplete = 'incomplete',
  Cancelled = 'cancelled',
  Complete = 'complete',
  Published = 'published',
}

export class JobResponseModel extends BaseModel {
  id: number;
  userId: number;
  jobId: number;
  status: JobResponseStatus;
  email: string;
  hourlyRate: number;
  margin: number;
  approvedUserId: number;
  resume: string;
  hasInvited: number;
  motivation: string;
  phone: string;
  language?: string;
  minHourlyRate: number;
  applicationUuid: string;
  activeSignupLink: number;
  job?: JobModel;
  user?: UserModel;
  fullName: string;
  firstName?: string;
  lastName?: string;
  locationId?: number;
  positions?: number[];
  technologies?: number[];
  minWorkingHours?: number;
  maxWorkingHours?: number;
  jobMatch: number;
  profilePicture?: any;

  nameOfResumeFile: string;
  selectedTechnologies?: InformationModel[];
  selectedPositions?: InformationModel[];
  selectedLocation?: InformationModel;

  constructor(jobResponse: any = {}) {
    super(jobResponse);
    this.userId = this.numberOrNull(jobResponse.userId);
    this.jobId = this.numberOrNull(jobResponse.jobId);
    this.status = <JobResponseStatus>this.stringOrNull(jobResponse.status);
    this.email = this.stringOrNull(jobResponse.email);
    this.language = jobResponse.language;
    this.hourlyRate = this.numberOrNull(jobResponse.hourlyRate);
    this.hasInvited = this.numberOrNull(jobResponse.hasInvited);
    this.motivation = this.stringOrNull(jobResponse.motivation);
    this.resume = jobResponse.resume;
    this.phone = this.stringOrNull(jobResponse.phone);
    this.user = new UserModel(jobResponse.user);
    this.job = new JobModel(jobResponse.job);
    this.fullName = jobResponse.fullName;
    this.firstName = jobResponse.firstName;
    this.lastName = jobResponse.lastName;
    this.locationId = jobResponse.locationId;
    this.positions = jobResponse.positions;
    this.technologies = jobResponse.technologies;
    this.minWorkingHours = jobResponse.minWorkingHours;
    this.maxWorkingHours = jobResponse.maxWorkingHours;
    this.jobMatch = jobResponse.jobMatch;
    this.profilePicture = jobResponse.profilePicture;
  }

  setStatus(status: JobResponseStatus) {
    this.status = status;
  }

  getMatch(job: JobModel) {
    let techMatches = 0;
    if (!this.user.freelancerInfo.technologies || !this.user.freelancerInfo.positions) {
      return 0;
    }

    job.technologies.filter(Number).forEach((technology) => {
      if (this.user.freelancerInfo.technologies.includes(technology)) {
        techMatches++;
      }
    });
    let posMatches = 0;
    job.positions.filter(Number).forEach((position) => {
      if (this.user.freelancerInfo.positions.includes(position)) {
        posMatches++;
      }
    });

    const techPercentage = (techMatches / job.technologies.filter(Number).length) * 70;
    const positionPercentage = (posMatches / job.positions.filter(Number).length) * 20;

    return techPercentage + positionPercentage;
  }

  // calculateMatch(job: JobModel) {
  //   let match = 0;
  //   // Match by skills (90 of the 100)
  //   const skillsMatch = this.getMatch(job);
  //   match += skillsMatch;
  //   // Match by location (10 of the 100)
  //   if (this.user.freelancerInfo.location === job.locationId) {
  //     match += 10;
  //   }
  //   this.match = Number(match.toFixed());
  // }
}

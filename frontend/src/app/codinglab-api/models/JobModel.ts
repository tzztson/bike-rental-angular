import { BaseModel } from './BaseModel';
import { InformationModel } from './InformationModel';
import { TranslocoService } from '@ngneat/transloco';

export enum JobStatus {
  Concept = 'concept',
  WaitingForApproval = 'waiting for approval',
  Offline = 'offline',
  Approved = 'approved',
  Published = 'published',
  Fulfilled = 'fulfilled',
  Deleted = 'deleted',
}

export class JobModel extends BaseModel {
  userId?: number;
  approvedUserId?: number;
  title?: string;
  description?: string;
  canStartNow?: number;
  knowledgeLevelJunior: number;
  knowledgeLevelMedior: number;
  knowledgeLevelSenior: number;
  maxHourlyRate?: number;
  officePossible: number;
  positions?: number[];
  technologies?: number[];
  minWorkingHours?: number;
  maxWorkingHours?: number;
  remotePossible?: number;
  durationMonths?: number;
  freelancersNeeded?: number;
  locationId?: number;
  status?: JobStatus;
  match: number;
  publishedAt?: Date;
  responses: number;
  startDate?: Date;
  knowledgeLevel: any;
  // custom property
  // these are values to display in the frontend
  localValues: {
    duration: string; // e.g. 3+ months
    knowledgeLevel: string; // e.g. medior-senior
  };
  workingHours: number[];
  startJob: {
    startDate?: Date;
    canStartNow?: number;
  };
  selectedPositions: InformationModel[];
  selectedLocation: InformationModel;
  selectedTechnologies: InformationModel[];
  createdAt: Date;
  updatedAt: Date;
  remoteWork: {
    remotePossible: boolean;
    officePossible: boolean;
  };

  constructor(job: any = {}) {
    super(job);
    this.id = job.id;
    this.locationId = job.locationId;
    this.title = job.title;
    this.description = job.description;
    this.canStartNow = job.canStartNow;
    this.startDate = job.startDate;
    this.maxHourlyRate = +job.maxHourlyRate;
    this.positions = job.positions;
    this.knowledgeLevelJunior = job.knowledgeLevelJunior;
    this.knowledgeLevelMedior = job.knowledgeLevelMedior;
    this.knowledgeLevelSenior = job.knowledgeLevelSenior;
    this.technologies = job?.technologies;
    this.minWorkingHours = job.minWorkingHours;
    this.maxWorkingHours = job.maxWorkingHours;
    this.match = job.match;
    this.remotePossible = job.remotePossible;
    this.officePossible = job.officePossible;
    this.responses = job.responses;
    this.durationMonths = job.durationMonths;
    this.freelancersNeeded = job.freelancersNeeded;
    this.status = job.status;
    this.publishedAt = job.publishedAt;
    this.userId = job.userId;
    this.approvedUserId = job.approvedUserId;
    this.createdAt = job.createdAt;
    this.updatedAt = job.updatedAt;
    this.startJob = {
      canStartNow: job.canStartNow,
      startDate: job.startDate,
    };
    this.remoteWork = {
      remotePossible: !!job.remotePossible,
      officePossible: !!job.officePossible,
    };
    this.knowledgeLevel = {
      junior: !!job.knowledgeLevelJunior,
      medior: !!job.knowledgeLevelMedior,
      senior: !!job.knowledgeLevelSenior,
    };
  }

  setStatus(status: JobStatus) {
    this.status = status;
  }

  workHours(minWorkingHours: number, maxWorkingHours: number): number[] {
    if (minWorkingHours && maxWorkingHours) {
      return [minWorkingHours, maxWorkingHours];
    }
    return [8, 40];
  }

  formatKnowledgeLevel(junior: number, medior: number, senior: number): any {
    if (junior || medior || senior) {
      return {
        junior: junior ? !!junior : false,
        medior: medior ? !!medior : false,
        senior: senior ? !!senior : false,
      };
    }
    return {
      junior: false,
      medior: false,
      senior: false,
    };
  }

  generateDisplayProperties(translator: TranslocoService) {
    this.localValues = {
      duration: this.getDuration(translator),
      knowledgeLevel: this.getKnowledgeLevel(),
    };
  }

  private getDuration(translator: TranslocoService) {
    const suffix = translator.getTranslation('job-detail.labels.months');
    switch (true) {
      case this.durationMonths < 3:
        return `1 - 3 ${suffix}`;
      case this.durationMonths >= 3 && this.durationMonths < 6:
        return `3+ ${suffix}`;
      case this.durationMonths >= 6 && this.durationMonths < 12:
        return `6+ ${suffix}`;
      case this.durationMonths >= 12:
        return `12+ ${suffix}`;
      default:
        return null;
    }
  }

  private getKnowledgeLevel() {
    const checkedLevel = Object.keys(this.knowledgeLevel).filter((key) => !!this.knowledgeLevel[key]);
    return checkedLevel.join('-');
  }
}

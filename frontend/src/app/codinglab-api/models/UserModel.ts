import { BaseModel } from './BaseModel';
import { FreelancerInfoModel } from './FreelancerInfoModel';
import { ClientInfoModel } from './ClientInfoModel';
import { ClientSettingsModel } from './ClientSettingsModel';
import { FreelancerSettingsModel } from './FreelancerSettingsModel';

export enum UserTypes {
  Freelancer = 'freelancer',
  Client = 'opdrachtgever',
  Admin = 'admin',
}

export enum Roles {
  Freelancer = 1,
  Client = 2,
  Admin = 3,
}

export class UserModel extends BaseModel {
  id: number;
  email: string;
  emailVerified: boolean;
  isNew: boolean;
  hasStepsDone: boolean;
  firstName: string;
  lastName: string;
  readonly fullName: string;
  password: string;
  language: string;
  roleId: number;
  // freelance job details
  companyId: number;
  description: string;
  lastActiveAt: Date;
  profilePictureUrl: string;

  freelancerInfo: FreelancerInfoModel;
  clientInfo: ClientInfoModel;

  freelancerSettings: FreelancerSettingsModel;
  clientSettings: ClientSettingsModel;

  // Added from CreateUserModel
  applicationUuid: string;
  type: string;
  companyName: string;
  title: string;
  yearsWorkExperience: number;
  availableAt: Date;
  isOnline?: boolean;

  readonly types = [
    { id: 1, name: 'freelancer' },
    { id: 2, name: 'opdrachtgever' },
    { id: 3, name: 'admin' },
  ];

  constructor(userData: any = {}) {
    super(userData);
    this.id = this.numberOrNull(userData.id);
    this.email = this.stringOrNull(userData.email);
    this.isNew = userData.isNew;
    this.hasStepsDone = userData.hasStepsDone;
    this.emailVerified = !!userData.emailVerified;
    this.firstName = this.stringOrNull(userData.firstName);
    this.fullName = this.stringOrNull(userData.fullName);
    this.lastName = this.stringOrNull(userData.lastName);
    this.password = this.stringOrNull(userData.password);
    this.language = this.stringOrNull(userData.language);
    this.roleId = this.numberOrNull(userData.roleId) || this.typeToRoleId(userData.type);

    this.companyId = this.numberOrNull(userData.companyId);
    this.description = this.stringOrNull(userData.description);
    this.lastActiveAt = this.dateOrNull(userData.lastActiveAt);

    this.freelancerInfo = userData.freelancerInfo && new FreelancerInfoModel(userData.freelancerInfo);
    this.clientInfo = userData.clientInfo && new ClientInfoModel(userData.clientInfo);

    this.freelancerSettings = userData.freelancerSettings && new FreelancerSettingsModel(userData.freelancerSettings);
    this.clientSettings = userData.clientSettings && new ClientSettingsModel(userData.clientSettings);

    this.applicationUuid = this.stringOrNull(userData.applicationUuid);
    this.type = this.stringOrNull(userData.type);
    this.companyName = this.stringOrNull(userData.companyName);
    this.title = this.stringOrNull(userData.title);
    this.yearsWorkExperience = this.numberOrNull(userData.yearsWorkExperience);
    this.availableAt = this.dateOrNull(userData.availableAt);
    this.isOnline = userData.isOnline;
  }

  typeToRoleId(typeName: string) {
    if (!typeName) {
      return null;
    }

    const userType = this.types.find((type) => type.name === typeName);

    return userType.id;
  }

  isFreelancer() {
    return this.roleId === Roles.Freelancer;
  }

  isClient() {
    return this.roleId === Roles.Client;
  }

  isAdmin() {
    return this.roleId === Roles.Admin;
  }
}

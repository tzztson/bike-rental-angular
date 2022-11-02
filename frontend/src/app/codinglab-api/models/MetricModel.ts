import { BaseModel } from './BaseModel';

export enum MetricType {
  Signup = 'signup',
  Login = 'login',
  JobCreated = 'job created',
  JobSearch = 'job search',
  JobDetailsView = 'job details view',
  JobApplied = 'job applied',
  FindTalent = 'find talent',
  FindTalentBottom = 'find talent bottom',
  SignupClicked = 'signup clicked',
  LoginClicked = 'login clicked',
  LandingPageVisit = 'landing page visit',
}

export class MetricModel extends BaseModel {
  type: MetricType;
}

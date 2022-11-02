import { UserModel } from '../../codinglab-api';

export const userModelMock: UserModel = {
  applicationUuid: '',
  availableAt: undefined,
  companyId: 0,
  companyName: '',
  description: '',
  lastActiveAt: undefined,
  title: '',
  type: '',
  yearsWorkExperience: 0,
  clientInfo: undefined,
  clientSettings: undefined,
  freelancerInfo: undefined,
  freelancerSettings: undefined,
  emailVerified: false,
  createdAt: undefined,
  types: undefined,
  updatedAt: undefined,
  // tslint:disable-next-line:no-unused
  csvToArray(arr: string): Array<string> {
    return undefined;
  },
  // tslint:disable-next-line:no-unused
  dateOrNull(date: any): any | null {
    return undefined;
  },
  isAdmin(): boolean {
    return false;
  },
  isClient(): boolean {
    return false;
  },
  isFreelancer(): boolean {
    return true;
  },
  // tslint:disable-next-line:no-unused
  numberOrNull(number: any): number {
    return 0;
  },
  // tslint:disable-next-line:no-unused
  stringOrNull(string: any): string {
    return '';
  },
  // tslint:disable-next-line:no-unused
  typeToRoleId(typeName: string): null | number {
    return undefined;
  },

  // tslint:disable-next-line:no-unused
  arrayOrEmpty<T>(arr: Array<T>) {
    return [];
  },

  id: 11,
  email: 'string',
  isNew: true,
  hasStepsDone: true,
  firstName: 'string',
  lastName: 'string',
  fullName: '',
  password: 'string',
  language: 'string',
  roleId: 1,
  // contact info
  // profile
};

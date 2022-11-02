import { ApiEnvironment } from './env.interface';

export const environment: ApiEnvironment = {
  production: false,
  frontEndUrl: 'http://localhost:4200', // Frontend url to be used in email to redirect user to change password
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const frontendUrl = 'http://localhost:4200';
const backendUrl = 'http://localhost:3030';

export const environment = {
  production: false,
  // front-end urls
  frontendUrl: frontendUrl, // TODO: check usage, and if it needs trailing slash or not
  contactForHelpUrl: `${frontendUrl}/contact/help-with-job`,
  // backend urls
  backendUrl: backendUrl, // TODO: check usage, and if it needs trailing slash or not
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

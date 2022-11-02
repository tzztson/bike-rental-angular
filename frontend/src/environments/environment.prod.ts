const frontendUrl = 'http://codinglab.prod';
const backendUrl = 'http://codinglab.prod:3030';

export const environment = {
  production: false,
  // front-end urls
  frontendUrl: frontendUrl, // TODO: check usage, and if it needs trailing slash or not
  contactForHelpUrl: `${frontendUrl}/contact/help-with-job`,
  // backend urls
  backendUrl: backendUrl, // TODO: check usage, and if it needs trailing slash or not
};

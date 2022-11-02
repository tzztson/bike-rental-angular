const frontendUrl = 'http://codinglab.develop';
const backendUrl = 'http://codinglab.develop:3030';
export const environment = {
  production: false,
  bugsnagAPIKey: '4e68bbfde65551f16e0fa29bf5b62a48',
  frontendUrl: frontendUrl,
  contactForHelpUrl: `${frontendUrl}/contact/help-with-job`,
  // backend urls
  backendUrl: backendUrl,
  userResumeDownloadUrl: `${backendUrl}/download-user-resume`,
  responseResumeDownloadUrl: `${backendUrl}/download-response-resume`,
  userContractDownloadUrl: `${backendUrl}/download-user-contract`,
  signedContractDownloadUrl: `${backendUrl}/download-signed-contract`,
  timeLogDownloadUrl: `${backendUrl}/download-time-log`,
  userAttachmentDownloadUrl: `${backendUrl}/download-user-attachment`,
  messagesFileDownloadUrl: `${backendUrl}/download-message-file`,
  userInvoiceDownloadUrl: `${backendUrl}/download-freelancer-invoice`,
  userProfilePictureUrl: `${backendUrl}/download-profile-picture`,
  googleAnalyticsId: null,
};

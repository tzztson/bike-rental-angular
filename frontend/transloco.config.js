module.exports = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['en','nl'],
  keysManager: {},
  defaultLang: 'en',
  reRenderOnLangChange: true,
  fallbackLang: 'en',
  prodMode: environment.production,
  missingHandler: {
      logMissingKey: true
  }
};
export const i18nConfig = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'ar'],
  defaultNS: 'common',
  ns: ['common', 'validation', 'errors'],
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'querystring'],
    lookupLocalStorage: 'lang',
    caches: ['localStorage'],
    excludeCacheFor: ['querystring'],
  },
};

import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof import('./locales/en/common.json');
      validation: typeof import('./locales/en/validation.json');
      errors: typeof import('./locales/en/errors.json');
    };
  }
}

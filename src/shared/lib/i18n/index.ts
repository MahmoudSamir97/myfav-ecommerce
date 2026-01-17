import enCommon from './locales/en/common.json';
import enValidation from './locales/en/validation.json';
import enErrors from './locales/en/errors.json';

import arCommon from './locales/ar/common.json';
import arValidation from './locales/ar/validation.json';
import arErrors from './locales/ar/errors.json';

export const resources = {
  en: {
    common: enCommon,
    validation: enValidation,
    errors: enErrors,
  },
  ar: {
    common: arCommon,
    validation: arValidation,
    errors: arErrors,
  },
} as const;

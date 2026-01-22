import { useEffect, useState, useCallback } from 'react';
import i18n from '@/app/providers/i18n/instance';
import type { LanguageCode } from './types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageCode>(i18n.language as LanguageCode);

  const changeLanguage = useCallback((lang: LanguageCode) => {
    i18n.changeLanguage(lang);
  }, []);

  useEffect(() => {
    const handleChange = (lng: string) => {
      setLanguage(lng as LanguageCode);
    };

    i18n.on('languageChanged', handleChange);
    return () => {
      i18n.off('languageChanged', handleChange);
    };
  }, []);

  return { language, changeLanguage };
};

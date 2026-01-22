import { type ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/providers/i18n/instance';

interface Props {
  children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
  useEffect(() => {
    const updateHtmlAttrs = (lng: string) => {
      const html = document.documentElement;
      html.lang = lng;
      html.dir = lng === 'ar' ? 'rtl' : 'ltr';
      html.classList.toggle('rtl', lng === 'ar');
    };

    updateHtmlAttrs(i18n.language);

    i18n.on('languageChanged', updateHtmlAttrs);
    return () => {
      i18n.off('languageChanged', updateHtmlAttrs);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

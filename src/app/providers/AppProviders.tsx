import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/instance';
import { ThemeProvider } from '@/app/providers';
import { Toaster } from '@/shared/ui';
import { QueryProvider } from '@/app/providers/query-client/QueryProvider';

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Toaster />
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}

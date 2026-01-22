import type { ReactNode } from 'react';
import { ThemeProvider } from '@/app/providers';
import { Toaster } from '@/shared/ui';
import { QueryProvider } from '@/app/providers/query-client/QueryProvider';
import { StoreProvider } from '@/app/providers/store/StoreProvider';
import { LanguageProvider } from '@/app/providers/i18n/LanguageProvider';

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <LanguageProvider>
      <StoreProvider>
        <ThemeProvider>
          <Toaster />
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </StoreProvider>
    </LanguageProvider>
  );
}

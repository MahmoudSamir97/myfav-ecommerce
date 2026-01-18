import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18n from './i18n/instance';
import { ThemeProvider } from '@/app/providers';
import { Toaster } from '@/shared/ui';

interface Props {
  children: ReactNode;
}

// const queryClient = new QueryClient();

export function AppProviders({ children }: Props) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="light">
        {/* <QueryClientProvider client={queryClient}> */}
        <Toaster />
        {children}
        {/* </QueryClientProvider> */}
      </ThemeProvider>
    </I18nextProvider>
  );
}

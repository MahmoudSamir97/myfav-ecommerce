// app/router/routes.tsx
import type { RouteObject } from 'react-router-dom';

import { HomePage } from '@/pages/home';
import { DashboardPage } from '@/pages/dashboard';
import { LoginPage } from '@/pages/auth/login';
import { NotFoundPage } from '@/pages/not-found';

import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { MainLayout } from '@/shared/layouts/main.layout';
import { AuthLayout } from '@/shared/layouts/auth.layout';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        element: <AuthGuard />,
        children: [{ path: 'dashboard', element: <DashboardPage /> }],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <GuestGuard />,
        children: [{ path: 'login', element: <LoginPage /> }],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

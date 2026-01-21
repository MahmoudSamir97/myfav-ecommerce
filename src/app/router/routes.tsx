import { BaseLayout } from '@/app/layouts';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/home/page'));
// const LoginPage = lazy(() => import('@/pages/auth/login/page'));
// const DashboardPage = lazy(() => import('@/pages/dashboard/page'));
// const ProductPage = lazy(() => import('@/pages/product/page'));
// const CartPage = lazy(() => import('@/pages/cart/page'));
const NotFoundPage = lazy(() => import('@/pages/not-found/page'));

export const routes: RouteObject[] = [
  {
    element: <BaseLayout />,
    children: [
      { index: true, element: <HomePage /> },

      // {
      //   element: <AuthGuard />,
      //   children: [{ path: 'dashboard', element: <DashboardPage /> }],
      // },
    ],
  },
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       element: <GuestGuard />,
  //       children: [{ path: 'login', element: <LoginPage /> }],
  //     },
  //   ],
  // },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { BaseLayout } from '@/app/layouts';

const HomePage = lazy(() => import('@/pages/home/page'));
const ProductsPage = lazy(() => import('@/pages/products/page'));
const ContactUsPage = lazy(() => import('@/pages/contact-us/page'));
const ShopPage = lazy(() => import('@/pages/shop/page'));
const NotFoundPage = lazy(() => import('@/pages/not-found/page'));

export const routes: RouteObject[] = [
  {
    element: <BaseLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'contact-us', element: <ContactUsPage /> },
      { path: 'shop', element: <ShopPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

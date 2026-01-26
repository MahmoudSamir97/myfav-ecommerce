import type { NavItem } from '@/widgets/header/model/types';

export const NAV_LINKS: NavItem[] = [
  {
    id: 'home',
    path: '/',
    labelKey: 'navLinks.home',
  },
  {
    id: 'shop',
    path: '/shop',
    labelKey: 'navLinks.shop',
  },
  {
    id: 'products',
    path: '/products',
    labelKey: 'navLinks.products',
  },
  {
    id: 'contact-us',
    path: '/contact-us',
    labelKey: 'navLinks.contactUs',
  },
];

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/utils';
import { NAV_LINKS } from '@/widgets/header/model/nav-links';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/shared/ui/shadcn/navigation-menu';

export const NavbarDesktop = () => {
  const { t } = useTranslation();
  return (
    <NavigationMenu className="hidden md:flex ">
      <NavigationMenuList className="gap-8 flex-row rtl:flex-row-reverse">
        {NAV_LINKS.map((link) => {
          return (
            <NavigationMenuItem key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'flex text-muted-foreground items-center justify-center transition-colors',
                    'hover:text-foreground ',
                    isActive && 'text-foreground'
                  )
                }
              >
                {t(link.labelKey)}
              </NavLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

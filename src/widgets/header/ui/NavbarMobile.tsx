import { FileTextIcon, HomeIcon, LayersIcon, UsersIcon } from 'lucide-react';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { cn } from '@/shared/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/shared/ui/shadcn/navigation-menu';
import { HamburgerIcon } from '@/shared/assets';

const defaultNavigationLinks = [
  { href: '#', label: 'Dashboard', icon: HomeIcon, active: true },
  { href: '#', label: 'Projects', icon: LayersIcon },
  { href: '#', label: 'Documentation', icon: FileTextIcon },
  { href: '#', label: 'Team', icon: UsersIcon },
];

export const NavbarMobile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="group h-8 w-8 hover:bg-accent hover:text-accent-foreground cursor-pointer block md:hidden"
          size="icon"
          variant="ghost"
          aria-label="Open navigation menu"
        >
          <HamburgerIcon className=" h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-1 md:hidden block">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex-col items-start gap-0">
            {defaultNavigationLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <NavigationMenuItem className="w-full" key={index}>
                  <button
                    type="button"
                    className={cn(
                      'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                      link.active && 'bg-accent text-accent-foreground'
                    )}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   if (onNavItemClick && link.href) {
                    //     onNavItemClick(link.href);
                    //   }
                    // }}
                  >
                    <Icon aria-hidden={true} className="text-muted-foreground" size={16} />
                    <span>{link.label}</span>
                  </button>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </PopoverContent>
    </Popover>
  );
};

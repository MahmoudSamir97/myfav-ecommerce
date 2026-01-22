import { cn } from '@/shared/lib/utils';
import { ChevronDownIcon, FileTextIcon, HomeIcon, LayersIcon, UsersIcon } from 'lucide-react';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/shadcn/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/ui';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/shared/ui/shadcn/navigation-menu';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui';
import { ThemeToggle } from '@/features/theme-toggle';
import { LanguageSwitcher, useLanguage } from '@/features/language-switcher';

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-label="Logo"
      role="img"
      fill="currentColor"
      height="1em"
      viewBox="0 0 324 323"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        fill="currentColor"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 88.1023 144.792)"
        width="151.802"
        x="88.1023"
        y="144.792"
      />
      <rect
        fill="currentColor"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 85.3459 244.537)"
        width="151.802"
        x="85.3459"
        y="244.537"
      />
    </svg>
  );
};

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    aria-label="Menu"
    role="img"
    className={cn('pointer-events-none', className)}
    fill="none"
    height={16}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
      d="M4 12L20 12"
    />
    <path
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
      d="M4 12H20"
    />
    <path
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
      d="M4 12H20"
    />
  </svg>
);

// User Menu Component
const UserMenu = ({
  userName = 'John Doe',
  userEmail = 'john@example.com',
  userAvatar,
  onItemClick,
}: {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        className="h-8 px-2 py-0 hover:bg-accent hover:text-accent-foreground"
        variant="ghost"
      >
        <Avatar className="h-6 w-6">
          <AvatarImage alt={userName} src={userAvatar} />
          <AvatarFallback className="text-xs">
            {userName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="h-3 w-3 ml-1" />
        <span className="sr-only">User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('profile')}>Profile</DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('settings')}>Settings</DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('billing')}>Billing</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('logout')}>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Types
export interface NavbarNavItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavItem[];
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onNavItemClick?: (href: string) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
  onUserItemClick?: (item: string) => void;
}

// Default navigation links with icons
const defaultNavigationLinks: NavbarNavItem[] = [
  { href: '#', label: 'Dashboard', icon: HomeIcon, active: true },
  { href: '#', label: 'Projects', icon: LayersIcon },
  { href: '#', label: 'Documentation', icon: FileTextIcon },
  { href: '#', label: 'Team', icon: UsersIcon },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      navigationLinks = defaultNavigationLinks,
      userName = 'John Doe',
      userEmail = 'john@example.com',
      userAvatar,
      onNavItemClick,
      onUserItemClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const { language, changeLanguage } = useLanguage();

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <nav
        className={cn(
          'w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60',
          className
        )}
        ref={combinedRef}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                    size="icon"
                    variant="ghost"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navigationLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <NavigationMenuItem className="w-full" key={index}>
                            <button
                              type="button"
                              className={cn(
                                'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                                link.active && 'bg-accent text-accent-foreground'
                              )}
                              onClick={(e) => {
                                e.preventDefault();
                                if (onNavItemClick && link.href) {
                                  onNavItemClick(link.href);
                                }
                              }}
                            >
                              <Icon
                                aria-hidden={true}
                                className="text-muted-foreground"
                                size={16}
                              />
                              <span>{link.label}</span>
                            </button>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <button
                type="button"
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                <div className="text-2xl">{logo}</div>
                <span className="hidden font-bold text-xl sm:inline-block">shadcn.io</span>
              </button>
              {/* Desktop navigation - icon only */}
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-2">
                    <TooltipProvider>
                      {navigationLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <NavigationMenuItem key={link.label}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <NavigationMenuLink
                                  className={cn(
                                    'flex size-8 items-center justify-center p-1.5 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer',
                                    link.active && 'bg-accent text-accent-foreground'
                                  )}
                                  href={link.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (onNavItemClick && link.href) {
                                      onNavItemClick(link.href);
                                    }
                                  }}
                                >
                                  <Icon aria-hidden={true} size={20} />
                                  <span className="sr-only">{link.label}</span>
                                </NavigationMenuLink>
                              </TooltipTrigger>
                              <TooltipContent className="px-2 py-1 text-xs" side="bottom">
                                <p>{link.label}</p>
                              </TooltipContent>
                            </Tooltip>
                          </NavigationMenuItem>
                        );
                      })}
                    </TooltipProvider>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-1">
            {/* Theme toggle */}
            <ThemeToggle />
            <LanguageSwitcher
              value={language}
              languages={[
                { value: 'ar', label: 'Ar' },
                { value: 'en', label: 'En' },
              ]}
              onChange={changeLanguage}
            />

            {/* User menu */}
            <UserMenu
              onItemClick={onUserItemClick}
              userAvatar={userAvatar}
              userEmail={userEmail}
              userName={userName}
            />
          </div>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';

export { Logo, HamburgerIcon, ThemeToggle, UserMenu };

import { cn } from '@/shared/lib/utils';
import { ThemeToggle } from '@/features/theme-toggle';
import { LanguageSwitcher, useLanguage } from '@/features/language-switcher';
import { Logo } from '@/widgets/header/ui/Logo';
import { NavbarDesktop } from '@/widgets/header/ui/NavbarDesktop';
import { NavbarMobile } from '@/widgets/header/ui/NavbarMobile';
import { SUPPORTED_LANGUAGES } from '@/shared/config';
import { AvatarIcon } from '@/shared/assets';
import { CartWithBadge } from '@/widgets/header/ui/CartWithBadge';
import { SearchButton } from '@/widgets/header/ui/SearchButton';

export const Navbar = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <nav
      className={cn(
        'w-full backdrop-blur supports-backdrop-filter:bg-background/60',
        'container mx-auto flex  items-center justify-between gap-4 py-3'
      )}
    >
      {/* Left side */}
      <div className="flex  items-center gap-2">
        <NavbarMobile />
        <Logo />
      </div>
      <NavbarDesktop />

      {/* Right side */}
      <div className="flex items-center gap-1">
        <div className="hidden md:flex items-center gap-1">
          <SearchButton />
          <AvatarIcon className="cursor-pointer" />
        </div>
        <CartWithBadge />
        <ThemeToggle />
        <LanguageSwitcher
          value={language}
          languages={SUPPORTED_LANGUAGES}
          onChange={changeLanguage}
        />
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

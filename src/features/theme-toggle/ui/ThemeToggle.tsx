import { MoonIcon, SunIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AppTooltip, Button } from '@/shared/ui';
import { useTheme } from '@/app/providers';

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();

  return (
    <AppTooltip content={t('themes.label')} side="bottom" align="center" sideOffset={4}>
      <Button className="cursor-pointer" onClick={toggle} size="icon" variant="nav">
        {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        <span className="sr-only">{t('themes.label')}</span>
      </Button>
    </AppTooltip>
  );
};

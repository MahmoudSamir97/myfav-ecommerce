import { MoonIcon, SunIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AppTooltip, Button } from '@/shared/ui';
import { useTheme } from '@/app/providers';

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();

  return (
    <AppTooltip content={t('themes.label')} side="bottom" align="center" sideOffset={4}>
      <Button className="cursor-pointer" onClick={toggle} size="icon" variant="ghost">
        {theme === 'light' ? (
          <SunIcon className="h-4.5 w-4.5" />
        ) : (
          <MoonIcon className="h-4.5 w-4.5" />
        )}
        <span className="sr-only">{t('themes.label')}</span>
      </Button>
    </AppTooltip>
  );
};
// import { MoonIcon, SunIcon } from 'lucide-react';
// import { useTranslation } from 'react-i18next';
// import { Button } from '@/shared/ui';
// import { useTheme } from '@/app/providers';

// export const ThemeToggle = () => {
// const { theme, toggle } = useTheme();
// const { t } = useTranslation();

//   return (
//     <Button
//       className="h-9 w-9 relative overflow-hidden p-0 cursor-pointer"
//       onClick={toggle}
//       size="icon"
//       variant="ghost"
//     >
//       <div className="relative h-4 w-4 transition-all">
//         {/* Sun Icon for light theme */}
//         <SunIcon
//           className={`absolute inset-0 h-4 w-4  transition-transform duration-300 ${
//             theme === 'light' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//           }`}
//         />
//         {/* Moon Icon for dark theme */}
//         <MoonIcon
//           className={`absolute inset-0 h-5 w-5  transition-transform duration-300 ${
//             theme === 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//           }`}
//         />
//       </div>
//       <span className="sr-only">{t('themes.label')}</span>
//     </Button>
//   );
// };

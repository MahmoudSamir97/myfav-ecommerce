import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/shadcn/select';
import { cn } from '@/shared/lib/utils';
import type { Language } from '../model/types';
import { LanguageIcon } from '@/shared/assets';

interface LanguageSwitcherProps {
  languages: Language[];
  value: Language['value'];
  onChange: (value: Language['value']) => void;
}

export const LanguageSwitcher = ({ languages, value, onChange }: LanguageSwitcherProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        aria-label="Select language"
        className={cn(
          'h-8  gap-2 px-2 font-medium',
          'border-none shadow-none cursor-pointer',
          'hover:text-accent-foreground'
        )}
      >
        <LanguageIcon className="h-5 w-5" aria-hidden />
        <SelectValue />
      </SelectTrigger>

      <SelectContent
        side="bottom"
        align="center"
        position="popper"
        sideOffset={2}
        avoidCollisions={false}
        className="z-50 min-w-18"
      >
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value} className="cursor-pointer">
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

LanguageSwitcher.displayName = 'LanguageSwitcher';

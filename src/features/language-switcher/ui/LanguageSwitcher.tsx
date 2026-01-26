import { GlobeIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/shadcn/select';
import { cn } from '@/shared/lib/utils';
import type { Language } from '../model/types';

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
          'h-8 w-18 gap-1 px-2',
          'border-none shadow-none cursor-pointer',
          'hover:text-accent-foreground'
        )}
      >
        <GlobeIcon size={20} aria-hidden className="" stroke="currentColor" />
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

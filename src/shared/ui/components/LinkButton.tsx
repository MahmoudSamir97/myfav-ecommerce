import { type LinkProps } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { useTranslation } from 'react-i18next';

type Props = LinkProps & {
  withArrow?: boolean;
};

export function LinkButton({ className, withArrow = false, children, ...props }: Props) {
  const { i18n } = useTranslation();
  return (
    <a
      {...props}
      className={cn(
        'inline-flex items-center gap-1 cursor-pointer',
        'text-link  border-b-2 pb-1 border-current ',
        'hover:opacity-80 transition-all hover:text-link/80',
        className
      )}
    >
      {children}
      {withArrow && i18n.language === 'ar' ? (
        <ArrowLeft className="w-5 h-5" />
      ) : (
        <ArrowRight className="w-5 h-5" />
      )}
    </a>
  );
}

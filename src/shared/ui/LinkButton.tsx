import { type LinkProps } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

type Props = LinkProps & {
  withArrow?: boolean;
};

export function LinkButton({ className, withArrow = false, children, ...props }: Props) {
  return (
    <a
      {...props}
      className={cn(
        'inline-flex items-center gap-1',
        'text-text-link  border-b-2 pb-1',
        'hover:opacity-80 transition-opacity',
        className
      )}
    >
      {children}
      {withArrow && <ArrowRight className="w-5 h-5 ml-2 inline" />}
    </a>
  );
}

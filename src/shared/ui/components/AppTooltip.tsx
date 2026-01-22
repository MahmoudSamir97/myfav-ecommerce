import { type ReactNode, useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  children: ReactNode;
  content: ReactNode;
  color?: keyof typeof tooltipStyles;
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined;
  align?: 'center' | 'start' | 'end' | undefined;
  hidden?: boolean;
  sideOffset?: number;
  isEnabled?: boolean;
  className?: string;
}

const tooltipStyles = {
  primary: 'bg-primary [&_svg]:bg-primary [&_svg]:fill-primary',
  foreground: 'bg-foreground [&_svg]:bg-foreground [&_svg]:fill-foreground',
};

export function AppTooltip({
  children,
  content,
  color = 'foreground',
  side,
  align,
  hidden,
  sideOffset = 0,
  isEnabled = true,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip open={isEnabled && open}>
      <TooltipTrigger asChild className={className}>
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          {children}
        </div>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        align={align}
        hidden={hidden}
        sideOffset={sideOffset}
        className={cn(
          tooltipStyles[color],
          typeof content === 'string' &&
            content.length > 100 &&
            'max-w-(--radix-tooltip-trigger-width) break-all text-lg font-bold'
        )}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
}

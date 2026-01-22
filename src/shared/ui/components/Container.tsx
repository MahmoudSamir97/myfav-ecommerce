import { cn } from '@/shared/lib/utils';

type ContainerProps = {
  size?: 'default' | 'wide' | 'narrow';
  children: React.ReactNode;
};

export function Container({ size = 'default', children }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'wide' && 'max-w-360',
        size === 'narrow' && 'max-w-5xl'
      )}
    >
      {children}
    </div>
  );
}

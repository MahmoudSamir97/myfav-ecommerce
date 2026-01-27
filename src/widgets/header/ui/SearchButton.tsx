import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '@/shared/assets';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

export const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger button (icon only) */}
      <Button
        aria-label="Search"
        variant="nav"
        onClick={() => setOpen(true)}
        className={cn('cursor-pointer', open && 'opacity-0 -translate-y-1 pointer-events-none')}
      >
        <SearchIcon />
      </Button>

      {/* Floating search input */}
      <div
        className={cn(
          'absolute end-2 top-0',
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        )}
      >
        <div className="relative">
          {/* Icon inside input */}
          <SearchIcon className="absolute start-3 top-1/2 -translate-y-1/2" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className={cn(
              'h-9 w-64 rounded-md border bg-background',
              'ps-10 pe-2 text-sm',
              'focus:outline-none focus:ring-1 focus:ring-ring'
            )}
          />
        </div>
      </div>
    </div>
  );
};

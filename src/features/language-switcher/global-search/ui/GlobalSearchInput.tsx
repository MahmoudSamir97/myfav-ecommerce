import { useSearchStore } from '../model/search.store';
import { cn } from '@/shared/lib/utils';

export const GlobalSearchInput = () => {
  const { open, query, setQuery, closeSearch } = useSearchStore();

  return (
    <div
      className={cn(
        'absolute right-0 top-0 transition-all duration-200',
        open ? 'w-64 opacity-100' : 'w-0 opacity-0 pointer-events-none'
      )}
    >
      <input
        autoFocus={open}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="h-9 w-full rounded-md border bg-background px-3 text-sm outline-none"
        onKeyDown={(e) => e.key === 'Escape' && closeSearch()}
      />
    </div>
  );
};

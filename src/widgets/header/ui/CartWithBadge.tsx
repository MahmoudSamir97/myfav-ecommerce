import { ShoppingIcon } from '@/shared/assets';
import { Button } from '@/shared/ui';

export const CartWithBadge = () => {
  return (
    <div className="relative">
      <Button aria-label="Shopping cart" variant="nav" className="cursor-pointer">
        <ShoppingIcon />
      </Button>

      <span
        className="
          absolute -top-1 -right-1
          min-w-4 h-4 px-1
          rounded-full
          bg-badge text-badge-foreground
          text-[10px] font-medium
          flex items-center justify-center
        "
        aria-label="Cart items: 2"
      >
        2
      </span>
    </div>
  );
};

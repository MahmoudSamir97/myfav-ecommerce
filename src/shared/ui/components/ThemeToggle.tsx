import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/providers';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-md p-2 cursor-pointer transition duration-300 bg-muted border"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme, ThemeProviderProps } from './types';

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const resolvedTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;

  return (
    <ThemeContext.Provider
      value={{
        theme: resolvedTheme,
        setTheme: (t) => {
          localStorage.setItem(storageKey, t);
          setTheme(t);
        },
        toggle: () => {
          let newTheme: Theme;
          if (theme === 'dark') newTheme = 'light';
          else if (theme === 'light') newTheme = 'dark';
          else {
            const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            newTheme = systemIsDark ? 'light' : 'dark';
          }
          localStorage.setItem(storageKey, newTheme);
          setTheme(newTheme);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

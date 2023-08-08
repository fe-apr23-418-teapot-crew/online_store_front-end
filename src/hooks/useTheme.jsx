import { useState, useEffect } from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark').matches;

const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || defaultTheme,
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

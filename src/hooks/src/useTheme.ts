import { useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { CONFIG } from '@mono/config';

export default function useTheme() {
  const themeLocalStorageKey = CONFIG.storage.localStorage.keys.theme;
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  useIsomorphicLayoutEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkQuery.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    // listen to changes in OS color scheme
    darkQuery.addEventListener('change', (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      setTheme(newColorScheme);
    });
    return () => {
      darkQuery.removeEventListener('change', (e) => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        setTheme(newColorScheme);
      });
    };
  }, []);

  // add data-theme to html and body on theme change
  useIsomorphicLayoutEffect(() => {
    // remove previous theme class 'light' or 'dark'
    document.documentElement.classList.remove('light', 'dark');
    document.body.classList.remove('light', 'dark');

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add(theme);
    // body
    document.body.setAttribute('data-theme', theme);
    document.body.classList.add(theme);
    // store theme in local storage
    if (window.localStorage && localStorage) {
      localStorage[themeLocalStorageKey] = theme;
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage[themeLocalStorageKey] = newTheme;
      return newTheme;
    });
  }, [themeLocalStorageKey]);

  return {
    theme,
    toggleTheme,
  };
}

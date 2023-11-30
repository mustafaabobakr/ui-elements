import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

export function useCookieStorage<T>(key?: string) {
  const [cookieValue, setStoredValue] = useState<T>();

  // store in cookies
  const handleSetCookie = useCallback((key: string, value: string | object) => {
    try {
      // dynamic import js-cookie, for performance.
      void import('js-cookie').then(({ default: Cookies }) => {
        Cookies.set(key, value);
      });
    } catch (error) {
      console.error('error setting cookie', error);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!key) return;
    const loadCookies = async () => {
      try {
        // dynamic import js-cookie, for performance.
        const Cookies = (await import('js-cookie')).default;
        const cookieValue = Cookies.get(key) as T;
        if (cookieValue) {
          setStoredValue(cookieValue);
        }
      } catch (error) {
        console.error('error loading js-cookie', error);
      }
    };
    void loadCookies();
  }, []);

  return {
    cookieValue,
    setCookie: handleSetCookie,
  };
}

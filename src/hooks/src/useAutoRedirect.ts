import { useRouter } from 'next/router';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

interface UseAutoRedirectProps {
  redirectPath?: string;
  timeout?: number;
}

/**
 * @description - This hook will redirect to the specified path after a timeout.
 * @param {string} redirectPath - The path to redirect to.
 * @param {number} timeout - The timeout in `milliseconds`.
 * @returns {void}
 * @example
 * import { useAutoRedirect } from '@packaged-ui/hooks';
 * useAutoRedirect({ redirectPath: '/home', timeout: 3000 });
 */
export default function useAutoRedirect({
  redirectPath = '/',
  timeout = 5000,
}: UseAutoRedirectProps) {
  const router = useRouter();
  const [timer, setTimer] = useState(timeout);
  useIsomorphicLayoutEffect(() => {
    const timer = setTimeout(() => {
      router.push(redirectPath);
    }, timeout);
    return () => clearTimeout(timer);
  }, []);

  // decrement the timer every second
  useIsomorphicLayoutEffect(() => {
    const timer = setTimeout(() => {
      setTimer((timer) => {
        if (timer > 0) {
          return timer - 1000;
        }
        return timer;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [timer]);

  return timer;
}

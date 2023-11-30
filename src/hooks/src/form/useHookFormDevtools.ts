import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

interface useHookFormDevtoolsProps {
  enable?: boolean;
}

export default function useHookFormDevtools({
  enable = true,
}: useHookFormDevtoolsProps) {
  const [enableDevTool, setEnableDevTool] = useState(false);

  const isDev = process.env.NODE_ENV === 'development';

  // Fix react-hook-form devtools is not clickable due to header zIndex
  useIsomorphicLayoutEffect(() => {
    // make header zIndex = 0
    if (isDev && enable) {
      const header = document.querySelector('header');
      if (header) {
        // DEBUG react-hook-form with devtools.
        header.style.zIndex = '0';
        setEnableDevTool(true);
      }
    }
    return () => {
      // reset header zIndex
      if (isDev && enable) {
        const header = document.querySelector('header');
        if (header) {
          header.style.zIndex = 'var(--z-header)';
          setEnableDevTool(false);
        }
      }
    };
  }, []);

  return enableDevTool;
}

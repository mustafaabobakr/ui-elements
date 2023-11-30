import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress, { NProgressOptions } from 'nprogress';

interface UseRouteChangeOptions {
  onStart?: (url?: string) => void;
  onEnd?: () => void;
  NProgressOptions?: Partial<NProgressOptions>;
}

function useRouteChange({
  onStart,
  onEnd,
  NProgressOptions,
}: UseRouteChangeOptions) {
  const router = useRouter();
  NProgress.configure({ ...NProgressOptions });
  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start();
      if (onStart) {
        onStart(url);
      }
    };
    const handleStop = () => {
      NProgress.done();
      if (onEnd) {
        onEnd();
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [onEnd, onStart, router]);
}

export default useRouteChange;

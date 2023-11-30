import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import {
  AnimationItem,
  AnimationConfigWithData,
  AnimationConfigWithPath,
} from 'lottie-web/build/player/lottie_light';

interface useLottieProps {
  container: React.MutableRefObject<HTMLElement | null>;
  animationFile: string;
  options?:
    | Omit<AnimationConfigWithPath, 'container'>
    | Omit<AnimationConfigWithData, 'container'>;
}
/**
 * @description hook that allows you to use lottie-web.
 * @param container - React.MutableRefObject<HTMLElement | null>
 * @param animationFile - animation file path.
 * @param options - loadAnimation options.
 * @example
 * const container = useRef(null);
 * const [open, setOpen] = useState(false);
 * const { isLoading, animation } = useLottie({
 * const { isLoading, animation } = useLottie({
 *  container,
 *  animationFile: 'animation_file.json',
 *  options: {
 *    loop: true,
 *    autoplay: true,
 *  },
 * });
 *
 * const toggleOpen = useCallback(() => {
 *  setOpen(!open);
 *  // animation events.
 *  animation?.setDirection(open ? -1 : 1);
 *  animation?.play();
 * }, []);
 *
 *
 * <button type="button" onClick={toggleOpen} ref={container}>
 *  {isLoading && <div data-label="lottie-skeleton">Loading animation...</div>}
 * </button>
 *
 *
 */
export default function useLottie({
  container,
  animationFile,
  options,
}: useLottieProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [animation, setAnimation] = useState<AnimationItem | undefined>(
    undefined
  );

  const memoizedCallback = useCallback(
    async (file: string) => {
      try {
        const lottie = (await import('lottie-web/build/player/lottie_light'))
          .default;
        const animationData = await (await fetch(file)).json();
        if (container.current) {
          // remove any previous animation. to avoid duplicate animations.
          animation?.stop();
          animation?.destroy();
          const animationElement = lottie.loadAnimation({
            container: container.current as HTMLElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData,
            ...options,
          });
          setAnimation(animationElement);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading animation');
      }
    },
    [animation, container, options]
  );

  const handleDestroy = useCallback(() => {
    animation?.destroy();
  }, [animation]);

  useIsomorphicLayoutEffect(() => {
    if (!animationFile) return;
    if (!container.current) return;
    void memoizedCallback(animationFile);
    // on route change destroy animation.
    router.events.on('routeChangeStart', handleDestroy);
    return () => {
      router.events.off('routeChangeStart', handleDestroy);
      animation?.destroy();
    };
  }, [router]);

  return {
    isLoading,
    animation,
  };
}

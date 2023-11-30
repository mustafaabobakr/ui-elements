import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

type ScrollDirection = 'up' | 'down' | null;

const useScrollDirection = () => {
  const THRESHOLD = 0;
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');

  // Refs are used to store mutable variables
  // that are preserved across component re-renders
  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  // useLayoutEffect runs synchronously after DOM mutations
  useIsomorphicLayoutEffect(() => {
    // Save the previous scroll position
    prevScrollY.current = window.pageYOffset;

    // updateScrollDirection is run on every scroll event
    // It updates scrollDirection if the scrollY change
    // is greater than the THRESHOLD
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? 'down' : 'up';

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      // Allow updating scrollDirection again
      blocking.current = false;
    };

    const onScroll = () => {
      // Prevent updating scrollDirection if it is already being updated
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;

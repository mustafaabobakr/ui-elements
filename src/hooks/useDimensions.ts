import { useState, useCallback, useEffect } from 'react';

const defaultDimensions: DOMRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  toJSON: () => null,
};
interface UseDimensions {
  ref: React.RefObject<HTMLElement>;
}

const useDimensions = ({ ref }: UseDimensions): DOMRect => {
  const [dimensions, setDimensions] = useState<DOMRect>(defaultDimensions);

  const memoizedCallback = useCallback(() => {
    if (ref.current) {
      const dimensions = ref.current.getBoundingClientRect();
      setDimensions(dimensions);
    }
  }, [ref]);

  useEffect(() => {
    // calculate on font load to account for font loading issue.
    document.fonts.ready.then(() => memoizedCallback());
  }, [memoizedCallback]);

  useEffect(() => {
    memoizedCallback();
    window.addEventListener('resize', memoizedCallback);
    return () => window.removeEventListener('resize', memoizedCallback);
  }, [memoizedCallback]);

  return dimensions;
};

export default useDimensions;

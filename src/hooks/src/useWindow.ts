import { useState, useCallback, useEffect } from 'react';

const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState<number>(500);
  const [windowHeight, setWindowHeight] = useState<number>(500);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { windowWidth, windowHeight };
};

export default useWindow;

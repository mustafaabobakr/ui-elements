import React, { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

const screenNames = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
type minMax = 'min-width' | 'max-width';
type mediaBetween = `(${minMax}: ${string}) and (${minMax}: ${string})`;
type media = `(${minMax}: ${string})`;
interface UseMediaQuery {
  query: (typeof screenNames)[number] | media | mediaBetween;
}
const screenSizes: Record<
  UseMediaQuery['query'],
  {
    'min-width': string;
    'max-width': string;
  }
> = {
  xs: { 'min-width': '200px', 'max-width': '400px' },
  sm: { 'min-width': '401', 'max-width': '768px' },
  md: { 'min-width': '769px', 'max-width': '921px' },
  lg: { 'min-width': '922px', 'max-width': '1279px' },
  xl: { 'min-width': '1280px', 'max-width': '1550px' },
  '2xl': { 'min-width': '1551px', 'max-width': '9999px' },
  '3xl': { 'min-width': '1920px', 'max-width': '9999px' },
};
const useMediaQuery = ({ query }: UseMediaQuery) => {
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  let queryString = query;
  // check if query is a valid screen name
  if (screenNames.includes(query as (typeof screenNames)[number])) {
    const min = screenSizes[query]['min-width'];
    const max = screenSizes[query]['max-width'];
    queryString = `(min-width: ${min}) and (max-width: ${max})`;
  }

  // cache the result of the callback
  const memoizedCallback = useCallback(() => {
    const media = window.matchMedia(queryString);
    setMatches(media.matches);
    setIsLoading(false);
  }, [queryString]);

  useIsomorphicLayoutEffect(() => {
    memoizedCallback();
    window.addEventListener('resize', memoizedCallback);
    return () => window.removeEventListener('resize', memoizedCallback);
  }, [memoizedCallback]);

  return {
    isLoading,
    matches,
  };
};

export default useMediaQuery;

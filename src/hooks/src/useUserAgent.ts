import React, { useState } from 'react';
import UAParser, { IResult } from 'ua-parser-js';
import { useIsomorphicLayoutEffect } from 'react-use';

function useUserAgent() {
  const [userAgent, setUserAgent] = useState<IResult | null>(null);

  useIsomorphicLayoutEffect(() => {
    const parser = new UAParser();
    setUserAgent(parser.getResult());
  }, []);

  return {
    userAgent,
    isMobile: userAgent?.device?.type === 'mobile',
    isTablet: userAgent?.device?.type === 'tablet',
    isDesktop: userAgent?.device?.type === undefined,
    isIOS: userAgent?.os?.name === 'iOS',
    isAndroid: userAgent?.os?.name === 'Android',
  };
}

export default useUserAgent;

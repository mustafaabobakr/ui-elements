import { IP_INFO } from '@mono/types/ip';
import { CMS_LOCALS } from '@mono/types/local';
import { useQuery } from '@tanstack/react-query';
import { CONFIG } from './config';

// call https://api.ipapi.com/${clientIP}?access_key={{sk}} and return IP_INFO
const get = async ({
  clientIP,
}: {
  clientIP: string;
}): Promise<IP_INFO | null> => {
  try {
    const url = `https://api.ipapi.com/${clientIP}?access_key=${CONFIG.ip.key}`;
    // POST request using fetch with error handling
    const data = (await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())) as IP_INFO;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
// call https://cms.dev.tap.company/api/i18n/locales and return CMS locals
const getCMSLocals = async (): Promise<CMS_LOCALS | null> => {
  try {
    const data = (await fetch(
      'https://cms.dev.tap.company/api/i18n/locales'
    ).then((res) => res.json())) as CMS_LOCALS;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// make a react-query to get the IP_INFO
const getCached = ({ clientIP }: { clientIP: string }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(['ip'], () => get({ clientIP }), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

// export country API
const ipDataService = {
  get,
  getCached,
  getCMSLocals,
};

export { ipDataService };

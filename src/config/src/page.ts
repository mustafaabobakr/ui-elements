import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axios';
import { CONFIG } from './config';

export interface CountryDataAxiosReq {
  slug: string;
  lang: string;
  countryCode: string;
  locale: string;
  preview?: boolean;
  secret?: string;
  axiosConfig?: AxiosRequestConfig;
}
/**
 *
 * @desc Get country data from API by country code in.
 *
 * ```js
 * serverSideProps() || getStaticProps()
 * ```
 * @param slug - Route path
 * @param countryCode - Country code
 * @param lang - Language code.
 * @param locale - Locale code ex: en-KW.
 * @param config - Axios config.
 * @param preview - Preview mode.
 * @param secret - Secret key.
 * @returns Country data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = async <T = any>({
  slug,
  countryCode,
  lang,
  locale,
  preview,
  secret,
  axiosConfig,
}: CountryDataAxiosReq): Promise<T> => {
  // construct url to set params.
  // example: https://cms.dev.tap.company/api/pages/slug?locale=en-KW
  const pageURL = new URL(
    `${CONFIG.api.baseURL}/pages/${encodeURIComponent(slug)}?`
  );

  pageURL.searchParams.append('locale', locale);
  pageURL.searchParams.append('user_country', countryCode);
  // append preview param if preview is true.
  if (preview) {
    pageURL.searchParams.append('publicationState', 'preview');
    if (secret) pageURL.searchParams.append('secret', secret);
  }

  const url = pageURL.toString();
  // for testing purpose get the local json data.
  // const url = new URL(
  //   `${CONFIG.website.baseURL}/assets/demo/kw_home.json`
  // ).toString();
  try {
    // TODO: to be removed
    console.info('request:', { url });
    const { data } = await axiosInstance.get(url, axiosConfig);
    return data;
  } catch (error: any) {
    console.error('getAxios error:', url, error.code);
    throw error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLocalData = async <T = any>(): Promise<T> => {
  try {
    const url = new URL(
      `${CONFIG.website.baseURL}/assets/demo/kw_home.json`
    ).toString();

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    console.error('getAxios error', error);
    throw error;
  }
};

interface GetCountryData<T> extends CountryDataAxiosReq {
  initialNextData?: T;
}
/**
 *
 * @desc Get country data from react-query cache.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCachedData = <T = any>({
  slug,
  countryCode,
  lang,
  locale,
  preview,
  secret,
  axiosConfig,
  initialNextData,
}: GetCountryData<T>) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(
    ['country', countryCode as string, lang as string],
    // () => initialNextData,
    () =>
      get({ slug, countryCode, lang, locale, preview, secret, axiosConfig }),
    {
      initialData: initialNextData,
    }
  );
};

// export country API
const countryDataService = {
  get,
  getLocalData,
  getCachedData,
};

export { countryDataService };

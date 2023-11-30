import { Redirect } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import { PageData, UserStoredInfo } from '@mono/types';
import { CountryDataAxiosReq } from '@mono/config/page';
import API from '@mono/config/api';

export type ServerWithValidData<Data = PageData | null> = {
  lang: string;
  countryCode: string | null;
  locale?: string;
  resolvedUrl: string;
  params: ParsedUrlQuery | null;
  preview: boolean;
  initialData: Data | null;
  userInfo?: UserStoredInfo;
};

export type ServerWithInvalidData = {
  redirect: Redirect;
};

interface GetPageDataProps extends CountryDataAxiosReq {
  params: ParsedUrlQuery | null;
  isPreview: boolean;
  secret?: string;
}
export async function getPageData<T = PageData>({
  lang,
  countryCode,
  params,
  slug,
  locale,
  isPreview,
  secret,
}: GetPageDataProps): Promise<ServerWithValidData<T>> {
  try {
    const data = await API.countryDataService.get<T>({
      lang,
      countryCode,
      slug,
      locale,
      preview: isPreview ? true : false,
      secret: isPreview ? (secret as string) : '',
    });

    return {
      lang,
      countryCode,
      locale,
      resolvedUrl: slug,
      params: params ? params : null,
      preview: isPreview ? true : false,
      initialData: data,
    };
  } catch (error) {
    return {
      lang,
      countryCode,
      locale,
      resolvedUrl: slug,
      params: params ? params : null,
      preview: isPreview ? true : false,
      initialData: null,
    };
  }
}

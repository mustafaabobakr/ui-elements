import API from '@mono/config/api';
import { CONFIG } from '@mono/config';
import { UserStoredInfo } from '@mono/types';

const defaultReturn = {
  locale: CONFIG.locale.value?.toLocaleLowerCase(),
  countryCode: CONFIG.locale.country?.toLocaleLowerCase(),
  language: CONFIG.locale.language?.toLocaleLowerCase(),
  cityName: CONFIG.userInfo.cityName,
  phoneCode: CONFIG.userInfo.phoneCode,
  currencyCode: CONFIG.userInfo.currencyCode,
};

/**
 * Get the locale from the IP address.
 * @param clientIP The IP address of the client.
 * @param requestLang The language of the request.
 * @returns { locale, countryCode, language, ipInfo, userInfo }
 */
export async function getIPLocale(
  clientIP: string | null,
  requestLang: string | undefined
) {
  if (!clientIP) {
    return defaultReturn;
  }

  try {
    const ipInfo = await API.ipDataService.get({ clientIP });
    const countryCode = ipInfo?.country_code ?? CONFIG.locale.country;
    // stop ip lang and user browser lang, ipInfo?.location?.languages[0]?.code ?? CONFIG.locale.language;
    const language = requestLang ?? CONFIG.locale.language;
    const locale = `${language}-${countryCode}`;

    // store user-info in cookies.
    const userInfo: UserStoredInfo = {
      language,
      locale: locale?.toLocaleLowerCase() ?? CONFIG.locale.value,
      countryCode: ipInfo?.country_code ?? CONFIG.userInfo.countryCode,
      cityName: ipInfo?.city ?? CONFIG.userInfo.cityName,
      phoneCode: ipInfo?.location.calling_code ?? CONFIG.userInfo.phoneCode,
      currencyCode: ipInfo?.currency.code ?? CONFIG.userInfo.currencyCode,
    };

    return userInfo;
  } catch (error) {
    return defaultReturn;
  }
}

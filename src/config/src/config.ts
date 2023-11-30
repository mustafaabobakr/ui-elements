import { UserStoredInfo, iso2 } from '@mono/types';

// constants
export const CONFIG = {
  analytics: {
    gtm: {
      id: process.env['NEXT_PUBLIC_GTM_ID'],
    },
  },
  api: {
    baseURL: process.env['NEXT_PUBLIC_API_BASE_URL'],
  },
  website: {
    baseURL:
      process.env['NEXT_PUBLIC_WEBSITE_URL'] ?? 'https://beta.tap.company/en',
  },
  ip: {
    baseURL: process.env['NEXT_PUBLIC_IP_BASE_URL'],
    key: process.env['NEXT_PUBLIC_IP_KEY'],
  },
  locale: {
    value: process.env['NEXT_PUBLIC_DEFAULT_LOCALE'] || 'en-sa',
    country: process.env['NEXT_PUBLIC_DEFAULT_LOCALE_COUNTRY'] || 'sa',
    language: process.env['NEXT_PUBLIC_DEFAULT_LOCALE_LANGUAGE'] || 'en',
  },
  storage: {
    cookies: {
      keys: {
        userInfo: 'user-info',
      },
    },
    localStorage: {
      keys: {
        theme: 'theme',
        cookie_consent: 'cookie_consent',
      },
    },
  },
  arrayCountriesOnTopDefault: [
    'SA',
    'AE',
    'KW',
    'BH',
    'QA',
    'OM',
    'EG',
  ] as iso2[],
  userInfo: {
    // saudi ip example
    ip: '101.44.127.118',
    cityName: 'Riyadh',
    countryCode: 'SA',
    currencyCode: 'SAR',
    language: 'en',
    locale: 'en-sa',
    phoneCode: '966',
  } satisfies UserStoredInfo,
  ui: {
    sliders: {
      CustomerGallery: {
        spaceBetween: 16,
        initialSlide: 2,
      },
    },
    icons: {
      // example https://tap-assets.b-cdn.net/icons/dashboard/light/country/AD.svg
      countryBaseURL:
        'https://tap-assets.b-cdn.net/icons/dashboard/light/country/',
      countryExtension: '.svg',
    },
  },
} as const;

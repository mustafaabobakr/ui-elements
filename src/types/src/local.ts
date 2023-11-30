import { COUNTRY_ISO2 } from './country';

export enum LANGUAGE {
  ar = 'ar',
  en = 'en',
  de = 'de',
  fr = 'fr',
  es = 'es',
  it = 'it',
}

export type LANGUAGE_TYPE = keyof typeof LANGUAGE;
export type COUNTRY_TYPE = keyof typeof COUNTRY_ISO2;

export type LOCALE = `${LANGUAGE_TYPE}-${COUNTRY_TYPE}`;

export type CMS_LOCAL = {
  id?: 5;
  name: string;
  code: LOCALE | LANGUAGE;
  isDefault: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type CMS_LOCALS = CMS_LOCAL[];

export type Detect = {
  locale: LOCALE;
  countryCode: COUNTRY_TYPE;
  language: LANGUAGE_TYPE;
};

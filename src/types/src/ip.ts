import { iso2 } from './country';

export interface IP_INFO {
  ip: string;
  type: string;
  continent_code: string;
  continent_name: Continent_Name;
  country_code: iso2;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip?: any;
  latitude: number;
  longitude: number;
  location: Location;
  time_zone: Timezone;
  currency: Currency;
  connection: Connection;
}

export type UserStoredInfo = {
  ip?: string | null;
  language: string | null;
  locale: string | null;
  cityName?: string | null;
  countryCode: string | null;
  phoneCode?: string | null;
  currencyCode?: string | null;
};
type Continent_Name =
  | 'Asia'
  | 'Africa'
  | 'Europe'
  | 'Oceania'
  | 'Antarctica'
  | 'North America'
  | 'South America';
interface Connection {
  asn: number;
  isp: string;
}

interface Currency {
  code: string;
  name: string;
  plural: string;
  symbol: string;
  symbol_native: string;
}

interface Timezone {
  id: string;
  current_time: string;
  gmt_offset: number;
  code: string;
  is_daylight_saving: boolean;
}

interface Location {
  geoname_id: number;
  capital: string;
  languages: Language[];
  country_flag: string;
  country_flag_emoji: string;
  country_flag_emoji_unicode: string;
  calling_code: string;
  is_eu: boolean;
}

interface Language {
  code: string;
  name: string;
  native: string;
}

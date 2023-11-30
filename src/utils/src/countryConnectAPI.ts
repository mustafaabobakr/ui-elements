import { countriesConnectAPI, countryConnectAPI, iso2 } from '@mono/types';

/**
  Example of data from the API: countryObject[]
```json
{
    "id": 187,
    "name_en": "Saudi Arabia",
    "name_ar": "المملكة العربية السعودية",
    "iso2": "SA",
    "iso3": "SAU",
    "idd_prefix": "966",
    "logo": "https://back-end.b-cdn.net/country/png/SA.png",
    "digits": "10",
    "supported_by_tap": "true",
    "createdAt": null,
    "updatedAt": null,
    "sitemap_exclude": null
}
```
*/
export class CountryConnectAPI {
  constructor(private readonly countries: countriesConnectAPI) {
    this.countries = countries;
  }

  // return all countries by default when creating an instance of the class
  get allCountries(): countriesConnectAPI {
    return this.countries;
  }

  getCountryByName = (name: string): countryConnectAPI | undefined => {
    if (!name || !this.countries) {
      return undefined;
    }
    return this.countries.find((country) => country.name_en === name);
  };

  /**
   * @param iso2 - ISO2 code of the country
   * @returns countryConnectAPI | undefined
   * @example getCountryByISO2('SA')
   * ```js
   * const countryClassInstance = new CountryConnectAPI(countries);
   * const country = countryClassInstance.getCountryByISO2('SA');
   * console.log(country);
   * {
   *  id: 187,
   *  name_en: "Saudi Arabia",
   *  name_ar: "المملكة العربية السعودية",
   *  iso2: "SA",
   *  iso3: "SAU",
   *  idd_prefix: "966",
   *  logo: "https://back-end.b-cdn.net/country/png/SA.png",
   *  digits: "10",
   *  supported_by_tap: "true",
   *  createdAt: null,
   *  updatedAt: null,
   *  sitemap_exclude: null
   * }
   * ```
   */
  getCountryByISO2 = (iso2: iso2): countryConnectAPI | undefined => {
    if (!iso2 || !this.countries) {
      return undefined;
    }
    return this.countries.find((country) => country.iso2 === iso2);
  };
  getPhonePrefixByISO2 = (iso2: iso2): string | undefined => {
    if (!iso2 || !this.countries) {
      return undefined;
    }
    return this.countries.find((country) => country.iso2 === iso2)?.idd_prefix;
  };
  sortCountriesByNameList = (
    arrayCountriesOnTop: iso2[]
  ): countriesConnectAPI => {
    if (!arrayCountriesOnTop || !this.countries) {
      return this.countries;
    }
    const countriesOnTop = this.countries.filter((country) =>
      arrayCountriesOnTop.includes(country.iso2)
    );

    // sort countriesOnTop by name list matching idd_prefix
    const countriesOnTopSortedByName = countriesOnTop.sort((a, b) => {
      const aIndex = arrayCountriesOnTop.indexOf(a.iso2);
      const bIndex = arrayCountriesOnTop.indexOf(b.iso2);
      return aIndex - bIndex;
    });

    const countriesOnBottom = this.countries.filter(
      (country) => !arrayCountriesOnTop.includes(country.iso2)
    );
    return [...countriesOnTopSortedByName, ...countriesOnBottom];
  };
}

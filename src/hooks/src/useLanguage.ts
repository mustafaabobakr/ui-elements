import { CONFIG } from '@mono/config';
import { iso2 } from '@mono/types';
import { useRouter } from 'next/router';

function useLanguage() {
  const router = useRouter();
  const { locale, slug } = router.query as {
    locale: string | undefined;
    slug: string[] | undefined;
  };

  const defaultDir = 'ltr';
  const defaultSlug = '';
  const defaultLocale = CONFIG.locale.value;
  const defaultLang = CONFIG.locale.language;
  const defaultCountry = CONFIG.locale.country;

  //
  const localParts = locale?.split('-'); // ['en', 'sa'] or ['ar']
  const lang = localParts && localParts[0];
  const country = localParts && localParts[1];
  const dir = lang === 'ar' ? 'rtl' : defaultDir;
  const isGlobalURL = localParts?.length === 1 || !country;

  return {
    isArabic: dir === 'rtl',
    slug: slug || defaultSlug,
    dir,
    lang: lang?.toLocaleLowerCase(),
    country: country?.toLocaleLowerCase() as Lowercase<iso2> | undefined,
    locale: locale?.toLocaleLowerCase(),
    /**
     * `isGlobalURL`: true if the url is global (e.g. /en) means it's not country specific.
     * and false if it's country specific (e.g. /en-sa)
     *
     */
    isGlobalURL,
    defaultDir,
    defaultSlug,
    defaultLang,
    defaultCountry,
    defaultLocale,
    localeWithFallback: locale ?? defaultLocale,
    langWithFallback: lang ?? defaultLang,
    countryWithFallback: country ?? defaultCountry,
  };
}

export default useLanguage;

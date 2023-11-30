import { useState } from 'react';
import { useRouter } from 'next/router';
import { useIsomorphicLayoutEffect } from 'react-use';
import { CookieConsentStore } from '@mono/types';
import { CookieFormType } from '@mono/ui/cookie/CookieConsent';
import { CONFIG } from '@mono/config';
// write a hook to check saved cookie consent in local storage with version

interface CookiesConsent {
  version: string;
  items: CookieFormType['items'];
}
const useCookiesConsent = ({ version, items }: CookiesConsent) => {
  const router = useRouter();
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cookieConsentStore, setCookieConsentStore] =
    useState<CookieConsentStore | null>(null);

  // extract default values from items
  const defaultCookieConsentStoreValues = items.reduce((acc, item) => {
    const trimmedName = item.name.trim();
    acc[trimmedName] = item.default_value;
    return acc;
  }, {} as CookieConsentStore['values']);
  // reject all object, makes all values false except "functional"
  const rejectAllCookieConsentStoreValues = items.reduce((acc, item) => {
    const trimmedName = item.name.trim();
    acc[trimmedName] = item.name === 'functional' ? true : false;
    return acc;
  }, {} as CookieConsentStore['values']);
  // accept all object, makes all values true
  const acceptAllCookieConsentStoreValues = items.reduce((acc, item) => {
    const trimmedName = item.name.trim();
    acc[trimmedName] = true;
    return acc;
  }, {} as CookieConsentStore['values']);

  // on route change close popup
  useIsomorphicLayoutEffect(() => {
    setIsPopupOpen(false);
  }, [router.asPath]);

  // check if cookie_consent is set in localStorage and open bar if not set.
  useIsomorphicLayoutEffect(() => {
    const CookieConsentStore = localStorage.getItem(
      CONFIG.storage.localStorage.keys.cookie_consent
    );
    // if cookie_consent is not set in localStorage, open bar
    if (!CookieConsentStore) {
      setIsBarOpen(true);
    } else {
      // if cookie_consent is set in localStorage, check version
      const cookieConsentStore = JSON.parse(
        CookieConsentStore
      ) as CookieConsentStore;
      const isChangedVersion = cookieConsentStore.version !== version;
      if (isChangedVersion) {
        setIsBarOpen(true);
        // remove cookie_consent from localStorage (if version change)
        localStorage.removeItem(
          CONFIG.storage.localStorage.keys.cookie_consent
        );
      }
      setCookieConsentStore(cookieConsentStore);
    }
  }, [version]);

  // handle cookie consent store save in localStorage
  useIsomorphicLayoutEffect(() => {
    if (cookieConsentStore) {
      localStorage.setItem(
        CONFIG.storage.localStorage.keys.cookie_consent,
        JSON.stringify(cookieConsentStore)
      );
    }
  }, [cookieConsentStore]);

  //
  return {
    isBarOpen,
    setIsBarOpen,
    isPopupOpen,
    setIsPopupOpen,
    cookieConsentStore,
    setCookieConsentStore,
    defaultCookieConsentStoreValues,
    rejectAllCookieConsentStoreValues,
    acceptAllCookieConsentStoreValues,
  };
};

export default useCookiesConsent;

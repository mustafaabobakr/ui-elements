/**
 * @description This is used to store the cookie consent in the browser.
 * @example
 * const cookieConsent: CookieConsentStore = {
 *  version: "1.0.0",
 *  answerType: "manage_cookie",
 *  values: {
 *     functional: true,
 *     analytics: false, // means to disable GTM analytics script in the app if false.
 *    }
 *  };
 *
 */
export type CookieConsentStore = {
  version: string;
  answerType: 'manage_cookie' | 'reject_cookie' | 'accept_cookie';
  values: {
    functional: boolean;
    analytics?: boolean;
    [key: string]: boolean | undefined;
  };
};

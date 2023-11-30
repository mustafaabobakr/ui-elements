import { CONFIG } from '@mono/config';

export class URLUtils extends URL {
  /**
   * @param {string} url
   * @description Check if the url is valid
   * @example isValidURL('https://google.com') // true
   *  isValidURL('google.com') // false
   *  isValidURL('https://google') // false
   *  isValidURL('https://google.') // false
   *  isValidURL('https://google.c') // false
   *
   * @returns {boolean} true if the url is valid
   */
  static isValidURL(url: unknown): boolean {
    if (typeof url !== 'string') return false;
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }
  static checkHttpUrl(string: string): boolean {
    let givenURL;
    try {
      givenURL = new URL(string);
    } catch (error) {
      return false;
    }
    return givenURL.protocol === 'http:' || givenURL.protocol === 'https:';
  }

  static isInternalLinkValid(href: string): boolean {
    if (!href) return false;
    // make sure to remove the first slash for consistency.
    if (href && href.startsWith('/')) {
      href = href.slice(1);
    }
    return URLUtils.isValidURL(`${CONFIG.website.baseURL}/${href}`);
  }
  static isExternalLinkValid(href: string): boolean {
    if (!href) return false;
    return URLUtils.isValidURL(href);
  }

  static navigateExternalLink(href: string): void {
    if (!href) return;
    window.open(href, '_blank');
  }

  static isInternalOrExternalLinkValid(href: unknown): boolean {
    if (!href) return false;
    if (typeof href !== 'string') return false;
    const isInternalLinkValid = URLUtils.isInternalLinkValid(href);
    const isExternalLinkValid = URLUtils.isExternalLinkValid(href);
    return isInternalLinkValid || isExternalLinkValid;
  }

  static createInternalLink(href: string, locale: string): string {
    if (!href) return `/${locale}`;
    const isInternalLinkValid = URLUtils.isInternalLinkValid(href);
    if (isInternalLinkValid && href.startsWith('/')) {
      href = href.slice(1);
    }
    return `/${locale}/${href}`;
  }
}

const famousLanguages = ['ar', 'en', 'fr', 'es', 'hi'];

export class PathName {
  /**
   * Check if the pathname is any of the most famous languages
   */
  static isPathnameLanguage(pathname: string) {
    return famousLanguages.some((lang) => pathname.includes(lang));
  }
}

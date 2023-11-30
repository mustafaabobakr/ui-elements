export class StringUtils extends String {
  static removeSpaces = (str: string): string => {
    if (!str) return '';
    return str.replace(/\s/g, '');
  };

  static removeSpecialCharacters = (str: string): string => {
    if (!str) return '';
    return str.replace(/[^\w\s]/gi, '');
  };

  static removeSpecialCharactersAndSpaces = (str: string): string => {
    if (!str) return '';
    return StringUtils.removeSpaces(StringUtils.removeSpecialCharacters(str));
  };

  static isEmpty = (str: string): boolean => {
    try {
      if (!str) return true;
      const isEmpty = str.trim().length === 0;
      return isEmpty;
    } catch (err) {
      return true;
    }
  };

  static generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // eslint-disable-next-line no-bitwise
      const r = (Math.random() * 16) | 0;
      // eslint-disable-next-line no-bitwise
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
}

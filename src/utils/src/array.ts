export class ArrayUtils extends Array {
  /**
   * Checks if an array is empty
   * @param {unknown[]} arr The array to check
   * @returns {boolean} `true` if the array is empty, `false` otherwise
   */
  static isEmpty = (arr?: unknown[]): boolean => {
    if (!arr) return true;
    try {
      const isArray = arr && Array.isArray(arr);
      if (!isArray) return true;
      const hasItems = arr.length > 0;
      if (hasItems) return false;
      return true;
    } catch (err) {
      return false;
    }
  };
}

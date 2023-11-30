import { DataTypeUtils } from './dataTypes';

//
export class ObjectUtils extends Object {
  static isEmpty = (obj: unknown): boolean => {
    try {
      const isObject = obj && typeof obj === 'object';
      if (!isObject) return true;
      const hasKeys = Object.keys(obj).length > 0;
      if (hasKeys) return false;
      return true;
    } catch (err) {
      return false;
    }
  };

  static hasProperty<T extends object>(obj: T, property: keyof T): boolean {
    try {
      const isObject = obj && typeof obj === 'object';
      if (!isObject) return false;
      if (!property) return false;
      const hasProperty = Object.keys(obj).includes(property as string);
      if (hasProperty) return true;
      return false;
    } catch (err) {
      return false;
    }
  }
  /**
   * Remove null and undefined and empty string properties
   * @param obj
   * @returns object without null and undefined and empty string properties
   * @example
   * ```ts
   * const obj = {
   *  a: null,
   *  b: undefined,
   *  c: '',
   *  d: 'hello',
   *  e: 0,
   *  f: false,
   *  g: true,
   *  h: 1,
   *  i: '1',
   *  j: [],
   *  k: {},
   *  l: [1,2,3],
   *  m: {a: 1, b: 2, c: 3},
   *  n: NaN,
   *  o: Infinity,
   *  p: -Infinity,
   *  q: () => {},
   *  r: new Date(),
   *  s: new RegExp(''),
   *  t: Symbol(''),
   *  u: new Error(),
   *  v: new Promise(() => {}),
   *  w: new Map(),
   *  x: new WeakMap(),
   *  y: new Set(),
   *  z: new WeakSet(),
   * };
   * const result = ObjectUtils.removeEmptyProperties(obj);
   * // result is:
   * const result = {
   *  d: 'hello',
   *  e: 0,
   *  f: false,
   *  g: true,
   *  h: 1,
   *  i: '1',
   *  l: [1,2,3],
   *  m: {a: 1, b: 2, c: 3}
   * }
   * ```
   */
  static removeEmptyProperties<T extends object>(obj: T): T {
    try {
      const isObject = DataTypeUtils.isObject(obj);
      if (!isObject) {
        return obj;
      }
      const hasKeys = Object.keys(obj).length > 0;
      if (!hasKeys) {
        return obj;
      }

      const result = Object.entries(obj).reduce((acc, [key, value]) => {
        const {
          isNaN,
          isNull,
          isInfinity,
          isUndefined,
          isEmptyArray,
          isEmptyObject,
          isEmptyString,
        } = DataTypeUtils.is(value);

        const condition =
          !isNaN &&
          !isNull &&
          !isInfinity &&
          !isUndefined &&
          !isEmptyString &&
          !isEmptyObject &&
          !isEmptyArray;

        if (condition) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          acc[key] = value;
        }
        return acc;
      }, {} as T);
      return result;
    } catch (err) {
      return obj;
    }
  }

  /**
   * @description Remove properties from object by property value
   * @param {object} obj
   * @param {unknown[]} propertyValue
   * @returns {object} object without properties
   * @example
   * ```ts
   * const obj = {
   * a: null,
   * b: undefined,
   * c: '',
   * d: 'hello',
   * e: 0,
   * f: false,
   * g: true,
   * };
   * const result = ObjectUtils.removeProperty(obj, [null, undefined, '', 0, false]);
   * // result is:
   * const result = {
   * d: 'hello',
   * g: true,
   * }
   * ```
   */
  static removeProperty<T extends object>(obj: T, propertyValue: unknown[]): T {
    try {
      const isObject = DataTypeUtils.isObject(obj);
      if (!isObject) {
        return obj;
      }
      const hasKeys = Object.keys(obj).length > 0;
      if (!hasKeys) {
        return obj;
      }

      const result = Object.entries(obj).reduce((acc, [key, value]) => {
        const condition = !propertyValue.includes(value);
        if (condition) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          acc[key] = value;
        }
        return acc;
      }, {} as T);
      return result;
    } catch (err) {
      return obj;
    }
  }
}

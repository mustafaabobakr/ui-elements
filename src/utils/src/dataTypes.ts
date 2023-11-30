/**
 * @description A collection of data types checks.
 * @example
 * ```ts
 * const value = 1;
 * const { isNumber } = DataType.is(value); // true
 * ```
 */
export class DataTypeUtils {
  static isString(value: unknown): value is string {
    return typeof value === 'string';
  }
  static isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol';
  }
  static isNumber(value: unknown): value is number {
    const numberValue = Number(value);
    return typeof numberValue === 'number' && isFinite(numberValue);
  }
  static isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }
  static isFunction(value: unknown): value is () => void {
    return typeof value === 'function';
  }
  static isObject(value: unknown): value is object {
    return value !== null && typeof value === 'object';
  }
  static isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
  }
  static isDate(value: unknown): value is Date {
    return value instanceof Date;
  }
  static isRegExp(value: unknown): value is RegExp {
    return value instanceof RegExp;
  }
  static isPromise(value: unknown): value is Promise<unknown> {
    return value instanceof Promise;
  }
  static isMap(value: unknown): value is Map<unknown, unknown> {
    return value instanceof Map;
  }
  static isWeakMap(value: unknown): value is WeakMap<object, unknown> {
    return value instanceof WeakMap;
  }
  static isSet(value: unknown): value is Set<unknown> {
    return value instanceof Set;
  }
  static isWeakSet(value: unknown): value is WeakSet<object> {
    return value instanceof WeakSet;
  }

  static isNaN(value: unknown): boolean {
    return Number.isNaN(value);
  }
  static isNullish(value: unknown): boolean {
    return (
      value === null ||
      value === undefined ||
      value === '' ||
      value === 0 ||
      value === +0 ||
      value === false ||
      DataTypeUtils.isNaN(value)
    );
  }
  static isNull(value: unknown): value is null {
    return value === null;
  }
  static isUndefined(value: unknown): value is undefined {
    return value === undefined;
  }
  static isEmptyString(value: unknown): value is string {
    return value === '';
  }
  static isEmptyObject(value: unknown): boolean {
    return DataTypeUtils.isObject(value) && Object.keys(value).length === 0;
  }
  static isEmptyArray(value: unknown): boolean {
    return Array.isArray(value) && value.length === 0;
  }
  static isInfinity(value: unknown): boolean {
    return value === Infinity || value === -Infinity;
  }
  static isPositiveInfinity(value: unknown): boolean {
    return value === +Infinity;
  }
  static isZero(value: unknown): boolean {
    return value === 0 || value === +0;
  }
  static isPositiveNumber(value: unknown): boolean {
    return DataTypeUtils.isNumber(value) && value > 0;
  }
  static isNegativeNumber(value: unknown): boolean {
    return DataTypeUtils.isNumber(value) && value < 0;
  }
  static is(value: unknown) {
    const isString = DataTypeUtils.isString(value);
    const isSymbol = DataTypeUtils.isSymbol(value);
    const isNumber = DataTypeUtils.isNumber(value);
    const isBoolean = DataTypeUtils.isBoolean(value);
    const isFunction = DataTypeUtils.isFunction(value);
    const isObject = DataTypeUtils.isObject(value);
    const isArray = DataTypeUtils.isArray(value);
    const isDate = DataTypeUtils.isDate(value);
    const isRegExp = DataTypeUtils.isRegExp(value);
    const isPromise = DataTypeUtils.isPromise(value);
    const isMap = DataTypeUtils.isMap(value);
    const isWeakMap = DataTypeUtils.isWeakMap(value);
    const isSet = DataTypeUtils.isSet(value);
    const isWeakSet = DataTypeUtils.isWeakSet(value);
    //
    const isNaN = DataTypeUtils.isNaN(value);
    const isNull = DataTypeUtils.isNull(value);
    const isNullish = DataTypeUtils.isNullish(value);
    const isUndefined = DataTypeUtils.isUndefined(value);
    const isZero = DataTypeUtils.isZero(value);
    const isInfinity = DataTypeUtils.isInfinity(value);
    const isEmptyArray = DataTypeUtils.isEmptyArray(value);
    const isEmptyObject = DataTypeUtils.isEmptyObject(value);
    const isEmptyString = DataTypeUtils.isEmptyString(value);
    const isPositiveInfinity = DataTypeUtils.isPositiveInfinity(value);
    const isPositiveNumber = DataTypeUtils.isPositiveNumber(value);
    const isNegativeNumber = DataTypeUtils.isNegativeNumber(value);

    return {
      isString,
      isSymbol,
      isNumber,
      isBoolean,
      isFunction,
      isObject,
      isArray,
      isDate,
      isRegExp,
      isPromise,
      isMap,
      isWeakMap,
      isSet,
      isWeakSet,
      isNaN,
      isNull,
      /**
       * @description isNullish is a combination of
       *
       * `null, undefined, empty string, zero, positive zero, negative zero, false, NaN`
       * @example
       * ```ts
       *  value === null ||
       *  value === undefined ||
       *  value === '' ||
       *  value === 0 ||
       *  value === +0 ||
       *  value === false ||
       *  DataType.isNaN(value)
       *
       * ```
       * @returns {boolean}
       */
      isNullish,
      isUndefined,
      isZero,
      isInfinity,
      isEmptyArray,
      isEmptyObject,
      isEmptyString,
      isPositiveInfinity,
      isPositiveNumber,
      isNegativeNumber,
    };
  }
}

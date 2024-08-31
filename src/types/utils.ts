/**
 * @description This function uses a mapped type to iterate over all properties of T.
 * - If a property is an array, it applies the NonNullableNested type recursively to the array's element type.
 * - If a property is an object, it applies NonNullableNested recursively to the property type. Otherwise, it applies the NonNullable utility type to the property type.
 * - Please note that this is a type-level operation.
 * - It doesn't actually remove null and undefined values from an object at runtime.
 * - To do that, you would need to implement the function `removeNullAndUndefined()`.
 *
 * @example
 * function removeNullAndUndefined<T>(configValue: T): NonNullableNested<T> {
 * // Implementation goes here
 * }
 */
export type NonNullableNested<T> = {
	[P in keyof T]: T[P] extends (infer U)[]
		? NonNullableNested<U>[]
		: T[P] extends object
		? NonNullableNested<T[P]>
		: NonNullable<T[P]>;
};

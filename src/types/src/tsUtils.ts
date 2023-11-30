/**
 * @description accept any string, but suggest some specific values on autocomplete.
 * @example
 * type Fruit = StringWithAutocomplete<"apple" | "banana" | "grape">;
 * const fruit: Fruit = ""; // ok
 * const apple: Fruit = "apple"; // ok
 * const banana: Fruit = "banana"; // ok
 * const watermelon: Fruit = "watermelon"; // ok
 * const arr: Fruit = []; // error
 * const obj: Fruit = {}; // error
 * const num: Fruit = 1; // error
 * const bool: Fruit = true; // error
 * const nullValue: Fruit = null; // error
 * const undefinedValue: Fruit = undefined; // error
 */
export type StringWithAutocomplete<T> = T | (string & Record<never, never>);

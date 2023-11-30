// who called me?
// from https://devimalplanet.com/javascript-how-to-get-the-caller-parent-functions-name

/**
 * @description
 * - Get the name of the function that called me.
 * - useful for debugging react hooks 🪝
 * > to see which component called the hook
 *
 * @example
 * import { whoCalledMe } from '@monorepo/utils';
 *
 * function child() {
 *  console.log(whoCalledMe());
 * }
 * function parent() {
 *  child();
 * }
 * parent(); // logs "parent"
 *
 */
export function whoCalledMe(): string {
  try {
    throw new Error();
  } catch (e) {
    // matches this function, the caller and the parent
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const allMatches = e.stack.match(/(\w+)@|at (\w+) \(/g);
    // match parent function name
    const parentMatches = allMatches[2].match(/(\w+)@|at (\w+) \(/);
    // return only name
    return parentMatches[1] || parentMatches[2];
  }
}

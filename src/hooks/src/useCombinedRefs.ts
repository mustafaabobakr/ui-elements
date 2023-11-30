import { RefObject } from 'react';

/**
 * Combines multiple refs for one element.
 */
export default function useCombinedRefs<T>(
  ...refs: Array<RefObject<T> | ((instance: T) => void) | null | undefined>
): (target: T) => void {
  return (target) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(target);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref.current = target;
      }
    });
  };
}

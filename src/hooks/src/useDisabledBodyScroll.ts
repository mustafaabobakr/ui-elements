import { useIsomorphicLayoutEffect } from 'usehooks-ts';

interface UseDisabledBodyScroll {
  condition: boolean;
  className?: string;
}

/**
 * @description: a hook to disable body scroll when popup is open or when the condition is true.
 * will add the provided className to body and default to `.open-popup`
 * @example
 * const [open, setOpen] = useState(false);
 * useDisabledBodyScroll({ condition: open });
 * // or
 * useDisabledBodyScroll({ condition: open, className: 'open-popup-custom-class' });
 *
 */
function useDisabledBodyScroll({
  condition,
  className = 'open-popup',
}: UseDisabledBodyScroll) {
  useIsomorphicLayoutEffect(() => {
    const body = document.body;
    if (condition) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }
    return () => {
      body.classList.remove(className);
    };
  }, [condition, className]);
}

export default useDisabledBodyScroll;

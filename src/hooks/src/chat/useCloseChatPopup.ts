import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

interface IUseCloseChatPopup {
  autoHide: boolean;
}

/**
 * @description Hook to close `all/any` chat popup on mount of any overlay component
 * - Modal
 * - Drawer
 * - Mobile Menu
 * @example
 * import { useCloseChatPopup } from '@monorepo/hooks';
 * const { isIntercomOpen, closeIntercom, openIntercom } = useCloseChatPopup();
 *
 */
export function useCloseChatPopup({ autoHide = false }: IUseCloseChatPopup) {
  const [isIntercomOpen, setIsIntercomOpen] = useState(false);
  const [isIntercomHidden, setIsIntercomHidden] = useState(false);
  const openIntercom = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.Intercom) {
      try {
        // https://developers.intercom.com/installing-intercom/docs/intercom-javascript#intercomshow
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.Intercom('show');
        setIsIntercomOpen(true);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to open Intercom', err);
      }
    }
  }, []);

  const closeIntercom = useCallback(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (window.Intercom) {
        // https://developers.intercom.com/installing-intercom/docs/intercom-javascript#intercomhide
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.Intercom('hide');
        setIsIntercomOpen(false);
      }
    } catch (err) {
      console.error('Failed to close Intercom', err);
    }
  }, []);

  const toggleOpenIntercom = useCallback(() => {
    if (isIntercomOpen) {
      closeIntercom();
    } else {
      openIntercom();
    }
  }, [closeIntercom, isIntercomOpen, openIntercom]);

  const showIntercom = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.Intercom) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.Intercom('update', { hide_default_launcher: false });
        setIsIntercomHidden(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to show Intercom', e);
      }
    }
  }, []);

  const hideIntercom = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.Intercom) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.Intercom('update', { hide_default_launcher: true });
        setIsIntercomHidden(true);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to hide Intercom', e);
      }
    }
  }, []);

  const toggleHideIntercom = useCallback(() => {
    if (isIntercomHidden) {
      showIntercom();
    } else {
      hideIntercom();
    }
  }, [hideIntercom, isIntercomHidden, showIntercom]);

  useIsomorphicLayoutEffect(() => {
    if (!window && typeof window !== 'undefined') return;
    if (autoHide) {
      try {
        // hide on mount
        hideIntercom();
      } catch (e) {
        console.error('Error hiding Intercom', e);
      }
    }
    return () => {
      // show on unmount;
      if (autoHide) {
        try {
          // hide on mount
          showIntercom();
        } catch (e) {
          console.error('Error showing Intercom', e);
        }
      }
    };
  }, [autoHide]);

  // DEBUG see who called the hook
  // console.log('useCloseChatPopup called by', whoCalledMe());

  return {
    isIntercomOpen,
    isIntercomHidden,
    openIntercom,
    closeIntercom,
    toggleOpenIntercom,
    hideIntercom,
    showIntercom,
    toggleHideIntercom,
  };
}

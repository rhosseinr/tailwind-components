// import Icon from 'components/elements/Icon';
import React, { FC, useCallback, useEffect, useRef } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
// import FocusTrap from 'utils/focus-trap';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.types';

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    // eslint-disable-next-line consistent-return
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className={styles.root}>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <div className={styles.modal} role="dialog" ref={ref}>
        {/* eslint-disable-next-line react/button-has-type */}
        <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className={styles.close}
        >
          {/* TODO:Fix this */}
          {/* <Icon Name="Cancel" /> */}
        </button>
        {/* <FocusTrap focusFirst>{children}</FocusTrap> */}
      </div>
    </div>
  );
};

export default Modal;

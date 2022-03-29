import { FC, ReactElement, useCallback } from 'react';

import style from './Modal.module.css';

type ModalPropsType = {
  isActive: boolean;
  changeIsActive: (value: boolean) => void;
};

export const Modal: FC<ModalPropsType> = ({
  isActive,
  changeIsActive,
  children,
}): ReactElement => {
  const closeModalCB = useCallback(() => {
    changeIsActive(false);
  }, []);

  return (
    <div
      role="presentation"
      className={`${style.modal}  ${isActive ? style.active : ''}`}
      onClick={closeModalCB}
    >
      <div
        role="presentation"
        className={`${style.modal__content} ${isActive ? style.active : ''} `}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

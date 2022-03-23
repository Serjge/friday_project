import { FC, ReactElement } from 'react';

import style from './Modal.module.css';

type ModalPropsType = {
  isActive: boolean;
  changeIsActive: (value: boolean) => void;
};

export const Modal: FC<ModalPropsType> = ({
  isActive,
  changeIsActive,
  children,
}): ReactElement => (
  <div
    role="presentation"
    className={`${style.modal}  ${isActive ? style.active : ''}`}
    onClick={() => changeIsActive(false)}
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

import { FC, ReactElement } from 'react';

import { Modal } from 'components/Modal';
import style from 'components/ModalPack/LearPack/LearnPack.module.css';
import { ErrorType } from 'components/ModalPack/LearPack/Types/Types';
import { SuperButton } from 'components/UI';

export const EndLearning: FC<ErrorType> = ({
  closeErrorWindow,
  active,
}): ReactElement => (
  <Modal isActive={active} changeIsActive={closeErrorWindow}>
    <div className={style.mainBlock}>
      <h1>End Pack</h1>
      <SuperButton onClick={() => closeErrorWindow(false)}>Back</SuperButton>
    </div>
  </Modal>
);

import { FC, ReactElement } from 'react';

import { Modal } from 'components/Modal';
import { SuperButton } from 'components/UI';
import { ErrorType } from 'types';

export const EndLearning: FC<ErrorType> = ({
  closeErrorWindow,
  active,
}): ReactElement => (
  <Modal isActive={active} changeIsActive={closeErrorWindow}>
    <h1>End Pack</h1>
    <SuperButton onClick={() => closeErrorWindow(false)}>Back</SuperButton>
  </Modal>
);

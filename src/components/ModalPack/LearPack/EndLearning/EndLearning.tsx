import { FC, ReactElement, useCallback } from 'react';

import { Modal } from 'components/Modal';
import { SuperButton } from 'components/UI';
import { ErrorType } from 'types';

export const EndLearning: FC<ErrorType> = ({
  closeLearningWindow,
  active,
}): ReactElement => {
  const closeLearning = useCallback(() => {
    closeLearningWindow(false);
  }, []);

  return (
    <Modal isActive={active} changeIsActive={closeLearningWindow}>
      <h1>End Pack</h1>
      <SuperButton onClick={closeLearning}>Back</SuperButton>
    </Modal>
  );
};

import { FC, ReactElement, useCallback } from 'react';

import { Modal, SuperButton } from 'components';
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
      <h2>End Pack</h2>
      <SuperButton onClick={closeLearning}>Back</SuperButton>
    </Modal>
  );
};

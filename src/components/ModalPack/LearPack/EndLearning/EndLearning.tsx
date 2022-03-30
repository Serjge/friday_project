import { FC, ReactElement, useCallback } from 'react';

import { Title } from '../style';

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
      <Title>
        <span>End Pack</span>
      </Title>
      <SuperButton onClick={closeLearning}>Back</SuperButton>
    </Modal>
  );
};

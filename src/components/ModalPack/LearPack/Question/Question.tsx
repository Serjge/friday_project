import { FC, ReactElement, useCallback } from 'react';

import { Modal } from 'components/Modal';
import { SuperButton } from 'components/UI';
import { QuestionType } from 'types';

export const Question: FC<QuestionType> = ({
  isActiveQuestion,
  setIsActiveQuestion,
  question,
  closeLearnWindow,
  setIsActiveAnswer,
}): ReactElement => {
  const openAnswer = useCallback(() => {
    setIsActiveAnswer(true);
  }, []);

  return (
    <Modal isActive={isActiveQuestion} changeIsActive={setIsActiveQuestion}>
      <h3>Question:</h3>
      <div>{question}</div>
      <div>
        <SuperButton onClick={closeLearnWindow}>Cancel</SuperButton>
        <SuperButton onClick={openAnswer}>Show answer</SuperButton>
      </div>
    </Modal>
  );
};

import { FC, ReactElement } from 'react';

import { Modal } from 'components/Modal';
import { SuperButton } from 'components/UI';
import { QuestionType } from 'types';

export const Question: FC<QuestionType> = ({
  isActiveQuestion,
  setIsActiveQuestion,
  question,
  closeLearnWindow,
  setIsActiveAnswer,
}): ReactElement => (
  <Modal isActive={isActiveQuestion} changeIsActive={setIsActiveQuestion}>
    <span>Question:</span>
    <div>{question}</div>
    <div>
      <SuperButton onClick={closeLearnWindow}>Cancel</SuperButton>
      <SuperButton onClick={() => setIsActiveAnswer(true)}>Show answer</SuperButton>
    </div>
  </Modal>
);

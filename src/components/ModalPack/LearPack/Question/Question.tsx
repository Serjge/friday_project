import { FC, ReactElement } from 'react';

import { Modal } from 'components/Modal';
import style from 'components/ModalPack/LearPack/LearnPack.module.css';
import { QuestionType } from 'components/ModalPack/LearPack/Types/Types';
import { SuperButton } from 'components/UI';

export const Question: FC<QuestionType> = ({
  isActiveQuestion,
  setIsActiveQuestion,
  question,
  closeLearnWindow,
  setIsActiveAnswer,
}): ReactElement => (
  <Modal isActive={isActiveQuestion} changeIsActive={setIsActiveQuestion}>
    <div className={style.mainBlock}>
      <span>Question:</span>
      <div>{question}</div>
      <div>
        <SuperButton onClick={closeLearnWindow}>Cancel</SuperButton>
        <SuperButton onClick={() => setIsActiveAnswer(true)}>Show answer</SuperButton>
      </div>
    </div>
  </Modal>
);

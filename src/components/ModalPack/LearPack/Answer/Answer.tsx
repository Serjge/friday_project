import { FC, ReactElement } from 'react';

import { Modal } from 'components/Modal';
import style from 'components/ModalPack/LearPack/LearnPack.module.css';
import { AnswerType } from 'components/ModalPack/LearPack/Types/Types';
import { SuperButton } from 'components/UI';

export const Answer: FC<AnswerType> = ({
  setIsActiveAnswer,
  answer,
  handleOpenAnswer,
  isActiveAnswer,
}): ReactElement => (
  <Modal isActive={isActiveAnswer} changeIsActive={setIsActiveAnswer}>
    <div className={style.mainBlock}>
      <div>Answer:</div>
      <div>{answer}</div>
      <div>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <SuperButton onClick={() => setIsActiveAnswer(false)}>Cancel</SuperButton>
        <SuperButton onClick={handleOpenAnswer}>Next</SuperButton>
      </div>
    </div>
  </Modal>
);

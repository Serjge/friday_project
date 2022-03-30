import { FC, ReactElement, useCallback } from 'react';

import { Buttons, Text, Title } from '../style';

import { MainBlock } from './style';

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
      <MainBlock>
        <div>
          <Title>
            <span>Question :</span>
          </Title>
          <Text>{question}</Text>
        </div>
        <Buttons>
          <SuperButton onClick={closeLearnWindow}>Cancel</SuperButton>
          <SuperButton onClick={openAnswer}>Show answer</SuperButton>
        </Buttons>
      </MainBlock>
    </Modal>
  );
};

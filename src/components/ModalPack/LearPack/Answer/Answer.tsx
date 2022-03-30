import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';

import { Title, Buttons, Text } from '../style';

import { Rating, MainBlock } from './style';

import { Modal, SuperButton, CheckBox } from 'components';
import { GradesCards } from 'enum';
import { AnswerType } from 'types';

export const Answer: FC<AnswerType> = ({
  setIsActiveAnswer,
  answer,
  handleNextQuestion,
  isActiveAnswer,
}): ReactElement => {
  const [currentGrade, setCurrentGrade] = useState<number | null>(null);

  const setNextQuestion = (): void => {
    if (currentGrade) {
      handleNextQuestion(currentGrade);
    }
    setCurrentGrade(null);
  };

  const handleGrade = useCallback((value: ChangeEvent<HTMLInputElement>): void => {
    setCurrentGrade(Number(value.currentTarget.value));
  }, []);

  const setIsActiveAnswerCB = useCallback(() => {
    setIsActiveAnswer(false);
  }, []);

  const checkBoxes = GradesCards.map(({ value, name }) => (
    <CheckBox
      type="checkbox"
      key={value}
      checked={value === currentGrade}
      onChange={handleGrade}
      value={value}
      labelTitle={name}
    />
  ));

  return (
    <Modal isActive={isActiveAnswer} changeIsActive={setIsActiveAnswer}>
      <MainBlock>
        <div>
          <Title>
            <span>Answer :</span>
          </Title>
          <Text>{answer}</Text>
        </div>
        <div>
          <Title>
            <span>Rating :</span>
          </Title>
          <Rating>{checkBoxes}</Rating>
        </div>
        <Buttons>
          <SuperButton onClick={setIsActiveAnswerCB}>Cancel</SuperButton>
          <SuperButton onClick={setNextQuestion}>Next</SuperButton>
        </Buttons>
      </MainBlock>
    </Modal>
  );
};

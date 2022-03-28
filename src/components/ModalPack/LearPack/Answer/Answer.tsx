import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';

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

  const checkBoxes = GradesCards.map(grade => (
    <CheckBox
      type="checkbox"
      key={grade.value}
      checked={grade.value === currentGrade}
      onChange={handleGrade}
      value={grade.value}
      labelTitle={grade.name}
    />
  ));

  return (
    <Modal isActive={isActiveAnswer} changeIsActive={setIsActiveAnswer}>
      <h3>Answer:</h3>
      <div>{answer}</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{checkBoxes}</div>
      <div>
        <SuperButton onClick={setIsActiveAnswerCB}>Cancel</SuperButton>
        <SuperButton onClick={setNextQuestion}>Next</SuperButton>
      </div>
    </Modal>
  );
};

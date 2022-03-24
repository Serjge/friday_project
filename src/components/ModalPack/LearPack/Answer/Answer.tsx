import { ChangeEvent, FC, ReactElement, useState } from 'react';

import { Modal, SuperButton, SuperCheckbox } from 'components';
import { GradesCards } from 'enum';
import { AnswerType } from 'types';
import { getNumberValuesFromEnum } from 'utils';

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

  const handleGrade = (value: ChangeEvent<HTMLInputElement>): void => {
    setCurrentGrade(Number(value.currentTarget.value));
  };

  const ranges = getNumberValuesFromEnum(GradesCards);
  // const ranges = getKeysAndValuesFromEnum(GradesCards);

  const checkBoxes = ranges.map(grade => (
    // let key = ''
    // let value = 0
    //
    // if(typeof grade === "number"){
    //   value = grade
    // }
    //
    // if(typeof grade === "string"){
    //   key = grade
    // }

    <SuperCheckbox
      key={grade}
      checked={grade === currentGrade}
      onChange={handleGrade}
      value={grade}
    >
      {grade}
    </SuperCheckbox>
  ));

  return (
    <Modal isActive={isActiveAnswer} changeIsActive={setIsActiveAnswer}>
      <div>Answer:</div>
      <div>{answer}</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{checkBoxes}</div>
      <div>
        <SuperButton onClick={() => setIsActiveAnswer(false)}>Cancel</SuperButton>
        <SuperButton onClick={setNextQuestion}>Next</SuperButton>
      </div>
    </Modal>
  );
};

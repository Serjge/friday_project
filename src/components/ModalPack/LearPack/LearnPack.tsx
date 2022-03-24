import { FC, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Answer } from 'components/ModalPack/LearPack/Answer/Answer';
import { EndLearning } from 'components/ModalPack/LearPack/EndLearning/EndLearning';
import { Question } from 'components/ModalPack/LearPack/Question/Question';
import { SuperButton } from 'components/UI';
import { setCardsAC } from 'store/actions';
import { selectPackCards } from 'store/selectors';
import { getCardsTC } from 'store/thunks';

type LearnPackPropsType = {
  packId: string;
};

const NEXT_CARD = 1;
const INITIAL_NUMBER_CARD = 0;

export const LearnPack: FC<LearnPackPropsType> = ({ packId }): ReactElement => {
  const dispatch = useDispatch();

  const cards = useSelector(selectPackCards);

  const [isActiveQuestion, setIsActiveQuestion] = useState<boolean>(false);
  const [isActiveAnswer, setIsActiveAnswer] = useState<boolean>(false);
  const [isActiveEnd, setIsActiveEnd] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number>(INITIAL_NUMBER_CARD);

  const closeQuestion = (value: boolean): void => {
    setCardNumber(INITIAL_NUMBER_CARD);
    dispatch(setCardsAC(null));
    setIsActiveQuestion(value);
  };
  const openLearn = (): void => {
    dispatch(getCardsTC(packId));
    setIsActiveQuestion(true);
  };

  const cancelLearnButton = (): void => {
    setIsActiveQuestion(false);
    setCardNumber(INITIAL_NUMBER_CARD);
    dispatch(setCardsAC(null));
  };

  const openAnswer = (): void => {
    if (cardNumber === cards.length - NEXT_CARD) {
      setIsActiveEnd(true);
      return;
    }
    setIsActiveAnswer(false);
    setCardNumber(cardNumber + NEXT_CARD);
  };

  return (
    <div>
      <SuperButton size="small" onClick={openLearn}>
        Learn
      </SuperButton>
      <Question
        question={cards[cardNumber].question}
        isActiveQuestion={isActiveQuestion}
        setIsActiveAnswer={setIsActiveAnswer}
        setIsActiveQuestion={closeQuestion}
        closeLearnWindow={cancelLearnButton}
      />
      <Answer
        answer={cards[cardNumber].answer}
        isActiveAnswer={isActiveAnswer}
        setIsActiveAnswer={setIsActiveAnswer}
        handleOpenAnswer={openAnswer}
      />
      <EndLearning active={isActiveEnd} closeErrorWindow={setIsActiveEnd} />
    </div>
  );
};

import { FC, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Answer } from './Answer';
import { EndLearning } from './EndLearning';
import { Question } from './Question';

import { SuperButton } from 'components/UI';
import { setCardsAC, setPageCountCardsAC } from 'store/actions';
import { selectPackCards } from 'store/selectors';
import { getCardsTC, setGradeCardTC } from 'store/thunks';
import { LearnPackPropsType } from 'types';

const NEXT_CARD = 1;
const INITIAL_NUMBER_CARD = 0;
const TIMER_FOR_SET_NEXT_CARD = 300;

export const LearnPack: FC<LearnPackPropsType> = ({
  packId,
  cardsCount,
}): ReactElement => {
  const dispatch = useDispatch();

  let question = '';
  let answer = '';

  const cards = useSelector(selectPackCards);

  const [isActiveQuestion, setIsActiveQuestion] = useState<boolean>(false);
  const [isActiveAnswer, setIsActiveAnswer] = useState<boolean>(false);
  const [isActiveEnd, setIsActiveEnd] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number>(INITIAL_NUMBER_CARD);

  const openLearn = (): void => {
    dispatch(setPageCountCardsAC(cardsCount)); // чтобы заменить значение в санке по умолчанию
    dispatch(getCardsTC(packId));
    setIsActiveQuestion(true);
  };

  const cancelLearnButton = (): void => {
    setIsActiveQuestion(false);
    setCardNumber(INITIAL_NUMBER_CARD);
    dispatch(setCardsAC(null));
  };

  const handleNextQuestion = (grade: number): void => {
    if (cardNumber === cards.length - NEXT_CARD) {
      setIsActiveEnd(true);
      return;
    }
    setIsActiveAnswer(false);
    setTimeout(() => {
      setCardNumber(cardNumber + NEXT_CARD);
    }, TIMER_FOR_SET_NEXT_CARD);
    // eslint-disable-next-line no-underscore-dangle
    dispatch(setGradeCardTC(cards[cardNumber]._id, grade));
  };

  const closeLearnWindows = (value: boolean): void => {
    setIsActiveAnswer(false);
    setIsActiveQuestion(false);
    setIsActiveEnd(value);
    dispatch(setCardsAC(null));
    setCardNumber(INITIAL_NUMBER_CARD);
  };

  if (cards.length) {
    question = cards[cardNumber].question;
    answer = cards[cardNumber].answer;
  }

  return (
    <div>
      <SuperButton size="small" onClick={openLearn}>
        Learn
      </SuperButton>
      <Question
        question={question}
        isActiveQuestion={isActiveQuestion}
        setIsActiveAnswer={setIsActiveAnswer}
        setIsActiveQuestion={closeLearnWindows}
        closeLearnWindow={cancelLearnButton}
      />
      <Answer
        answer={answer}
        isActiveAnswer={isActiveAnswer}
        setIsActiveAnswer={closeLearnWindows}
        handleNextQuestion={handleNextQuestion}
      />
      <EndLearning active={isActiveEnd} closeLearningWindow={closeLearnWindows} />
    </div>
  );
};

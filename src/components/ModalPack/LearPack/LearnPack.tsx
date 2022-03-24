/* eslint-disable */
import { FC, ReactElement, useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { Answer } from 'components/ModalPack/LearPack/Answer/Answer';
import { EndLearning } from 'components/ModalPack/LearPack/EndLearning/EndLearning';
import { Question } from 'components/ModalPack/LearPack/Question/Question';
import { SuperButton } from 'components/UI';
import { setCardsAC, setPageCountCardsAC } from "store/actions";
import { selectPackCards } from 'store/selectors';
import { getCardsTC } from 'store/thunks';
import { setGradeCardTC } from 'store/thunks/cardsThunks';

type LearnPackPropsType = {
  packId: string;
  cardsCount: number;
};

const NEXT_CARD = 1;
const INITIAL_NUMBER_CARD = 0;

export const LearnPack: FC<LearnPackPropsType> = ({ packId, cardsCount }): ReactElement => {
  const dispatch = useDispatch();

  let question = ''
  let answer = ''

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
    dispatch(setPageCountCardsAC(cardsCount))  // чтобы заменить значение в санке по умолчанию
    dispatch(getCardsTC(packId));
    setIsActiveQuestion(true);
  };

  const cancelLearnButton = (): void => {
    setIsActiveQuestion(false);
    setCardNumber(INITIAL_NUMBER_CARD);
    dispatch(setCardsAC(null));

    dispatch(setGradeCardTC(cards[cardNumber]._id, 3));
  };

  const openAnswer = (): void => {
    if (cardNumber === cards.length - NEXT_CARD) {
      setIsActiveEnd(true);
      return;
    }
    setIsActiveAnswer(false);
    setCardNumber(cardNumber + NEXT_CARD);
  };

  const closeLearnWindows = (value:boolean) => {
    setIsActiveAnswer(false)
    setIsActiveQuestion(false)
    setIsActiveEnd(value)
    dispatch(setCardsAC(null));
    setCardNumber(INITIAL_NUMBER_CARD);
  };

  if(!!cards.length){
    question = cards[cardNumber].question
    answer = cards[cardNumber].answer
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
        setIsActiveQuestion={closeQuestion}
        closeLearnWindow={cancelLearnButton}
      />
      <Answer
        answer={answer}
        isActiveAnswer={isActiveAnswer}
        setIsActiveAnswer={setIsActiveAnswer}
        handleOpenAnswer={openAnswer}
      />
      <EndLearning active={isActiveEnd} closeErrorWindow={closeLearnWindows} />
    </div>
  );
};

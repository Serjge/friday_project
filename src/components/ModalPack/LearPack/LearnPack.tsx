import { FC, ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Answer } from 'components/ModalPack/LearPack/Answer/Answer';
import { Error } from 'components/ModalPack/LearPack/Error/Error';
import { Question } from 'components/ModalPack/LearPack/Question/Question';
import { SuperButton } from 'components/UI';
import { selectPackCards } from 'store/selectors';
import { getCardsTC } from 'store/thunks';

type LearnPackPropsType = {
  packUserId: string;
  handleCardsCount: () => void;
};

const NEXT_CARD = 1;
const INITIAL_NUMBER_CARD = 0;

export const LearnPack: FC<LearnPackPropsType> = ({
  packUserId,
  handleCardsCount,
}): ReactElement => {
  const dispatch = useDispatch();
  const [isActiveQuestion, setIsActiveQuestion] = useState<boolean>(false);
  const [isActiveAnswer, setIsActiveAnswer] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number>(INITIAL_NUMBER_CARD);

  const cards = useSelector(selectPackCards);

  useEffect(() => {
    dispatch(getCardsTC(packUserId));
  }, [isActiveQuestion]);

  const handleOpenLearn = (): void => {
    setIsActiveQuestion(true);
    handleCardsCount();
  };

  const closeLearnWindow = (): void => {
    setIsActiveQuestion(false);
    setCardNumber(INITIAL_NUMBER_CARD);
  };

  const handleOpenAnswer = (): void => {
    if (cardNumber === cards.length - NEXT_CARD) {
      setError(true);
      return;
    }
    setIsActiveAnswer(false);
    setCardNumber(cardNumber + NEXT_CARD);
  };

  return (
    <div>
      <SuperButton size="small" onClick={handleOpenLearn}>
        Learn
      </SuperButton>
      <Question
        question={cards[cardNumber].question}
        isActiveQuestion={isActiveQuestion}
        setIsActiveAnswer={setIsActiveAnswer}
        setIsActiveQuestion={setIsActiveQuestion}
        closeLearnWindow={closeLearnWindow}
      />
      <Answer
        answer={cards[cardNumber].answer}
        isActiveAnswer={isActiveAnswer}
        setIsActiveAnswer={setIsActiveAnswer}
        handleOpenAnswer={handleOpenAnswer}
      />
      <Error active={error} closeErrorWindow={setError} />
    </div>
  );
};

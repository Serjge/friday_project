/* eslint-disable */
import { FC, ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './LearnPack.module.css';

import { Modal } from 'components/Modal';
import { SuperButton } from 'components/UI';
import { selectPackCards } from 'store/selectors';
import { getCardsTC } from 'store/thunks';

type LearnPackPropsType = {
  packUserId: string;
  handleCardsCount: () => void;
};

export const LearnPack: FC<LearnPackPropsType> = ({
  packUserId,
  handleCardsCount,
}): ReactElement => {
  const dispatch = useDispatch();
  const [isActiveQuestion, setIsActiveQuestion] = useState<boolean>(false);
  const [isActiveAnswer, setIsActiveAnswer] = useState<boolean>(false);
  const [error, seError] = useState<boolean>(false);
  const [card, setCard] = useState<number>(0);

  const cards = useSelector(selectPackCards);

  useEffect(() => {
    dispatch(getCardsTC(packUserId));
  }, [isActiveQuestion]);

  const handleOpenLearn = (): void => {
    setIsActiveQuestion(true);
    handleCardsCount();
  };

  const closeLearnWindow = () => {
    setIsActiveQuestion(false)
    setCard(0)
  };

  const handleOpenAnswer = (): void => {
    if(card === cards.length - 1){
      console.log('end');
      seError(true)
      return
    }
    setIsActiveAnswer(false);
    setCard(card+1)
  };

  return (
    <div>
      <SuperButton size="small" onClick={handleOpenLearn}>
        Learn
      </SuperButton>
      <Modal isActive={isActiveQuestion} changeIsActive={setIsActiveQuestion}>
        <div className={style.blockWithQuestion}>
          <span>Question:</span>
          <div>{cards[card].question}</div>
          <div>
            <SuperButton onClick={closeLearnWindow}>Cancel</SuperButton>
            <SuperButton onClick={()=>setIsActiveAnswer(true)}>Show answer</SuperButton>
          </div>
        </div>
      </Modal>
      <Modal isActive={isActiveAnswer} changeIsActive={setIsActiveAnswer}>
        <div className={style.blockWithQuestion}>
          <div>Answer:</div>
          <div>{cards[card].answer}</div>
          <SuperButton onClick={() => setIsActiveAnswer(false)}>Cancel</SuperButton>
          <SuperButton onClick={handleOpenAnswer} >Next</SuperButton>
        </div>
      </Modal>
      <Modal isActive={error} changeIsActive={seError}>
        <div className={style.blockWithQuestion}>
          <h1 >End Pack</h1>
          <SuperButton onClick={() => seError(false)}>Back</SuperButton></div>
      </Modal>
    </div>
  );
};

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
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActive2, setIsActive2] = useState<boolean>(false);
  const [card, setCard] = useState<number>(0);
  // const [arrCards, setArrCards] = useState<CardType[]>([]);

  const cards = useSelector(selectPackCards);

  useEffect(() => {
    dispatch(getCardsTC(packUserId));
  }, [isActive]);

  const handleOpenLearn = (): void => {
    setIsActive(true);
    handleCardsCount();
  };

  const handleOpenAnswer = (): void => {
    setCard(card+1)
    setIsActive2(false);
  };

  return (
    <div>
      <SuperButton size="small" onClick={handleOpenLearn}>
        Learn
      </SuperButton>
      <Modal isActive={isActive} changeIsActive={setIsActive}>
        <div className={style.blockWithQuestion}>
          <span>Question:</span>
          <div>{cards[card].question}</div>
          <div>Answer:</div>
          <div>{cards[card].answer}</div>
          <div>
            <SuperButton onClick={() => setIsActive(false)}>Cancel</SuperButton>
            <SuperButton onClick={handleOpenAnswer}>Show answer</SuperButton>
          </div>
        </div>
      </Modal>
      <Modal isActive={isActive2} changeIsActive={setIsActive2}>
        <div>
          <div>Title</div>
          <div>Question</div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est id
          mollitia, nisi quibusdam quis rem rerum tempore, vel voluptate voluptates! Eos
          error magni maxime molestiae nostrum perspiciatis tempore!
          <SuperButton onClick={() => setIsActive2(false)}>Cancel</SuperButton>
          <SuperButton>Show answer</SuperButton>
        </div>
      </Modal>
    </div>
  );
};

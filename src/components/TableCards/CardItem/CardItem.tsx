import { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SuperButton } from 'components';
import { RootReducerType } from 'store';
import {
  selectAnswer,
  selectGradeCard,
  selectQuestion,
  selectUpdateCard,
} from 'store/selectors';
import { deleteCardTC, updateCardTC } from 'store/thunks';
import { Flex, TableItem } from 'styles';

type CardItemPropsType = {
  cardId: string;
  isMyPack: boolean;
};

export const CardItem = memo(({ cardId, isMyPack }: CardItemPropsType) => {
  const dispatch = useDispatch();

  const question = useSelector((state: RootReducerType) => selectQuestion(state, cardId));
  const answer = useSelector((state: RootReducerType) => selectAnswer(state, cardId));
  const updated = useSelector((state: RootReducerType) =>
    selectUpdateCard(state, cardId),
  );
  const grade = useSelector((state: RootReducerType) => selectGradeCard(state, cardId));

  const dataNew = new Date(updated);

  const onDeleteCardClick = (): void => {
    dispatch(deleteCardTC(cardId));
  };

  const onUpdateCardClick = (): void => {
    dispatch(
      updateCardTC(cardId, { question: 'updateQuestion', answer: 'updateAnswer' }),
    );
  };

  if (isMyPack) {
    return (
      <Flex justifyContent="center">
        <TableItem flexBasis="35%">{question}</TableItem>
        <TableItem flexBasis="35%">{answer}</TableItem>
        <TableItem flexBasis="10%">{dataNew.toLocaleDateString()}</TableItem>
        <TableItem flexBasis="10%">{grade}</TableItem>
        <TableItem flexBasis="10%">
          <SuperButton size="small" onClick={onUpdateCardClick}>
            Edit
          </SuperButton>
          <SuperButton size="small" onClick={onDeleteCardClick}>
            Delete
          </SuperButton>
        </TableItem>
      </Flex>
    );
  }

  return (
    <Flex justifyContent="center">
      <TableItem flexBasis="40%">{question}</TableItem>
      <TableItem flexBasis="40%">{answer}</TableItem>
      <TableItem flexBasis="10%">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem flexBasis="10%">{grade}</TableItem>
    </Flex>
  );
});

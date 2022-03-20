import { memo } from 'react';

import { useSelector } from 'react-redux';

import { SuperButton } from 'components';
import { RootReducerType } from 'store';
import {
  selectAnswer,
  selectGradeCard,
  selectQuestion,
  selectUpdateCard,
} from 'store/selectors';
import { Flex, TableItem } from 'styles';

type CardItemPropsType = {
  cardId: string;
  isMyPack: boolean;
};

export const CardItem = memo(({ cardId, isMyPack }: CardItemPropsType) => {
  const question = useSelector((state: RootReducerType) => selectQuestion(state, cardId));
  const answer = useSelector((state: RootReducerType) => selectAnswer(state, cardId));
  const updated = useSelector((state: RootReducerType) =>
    selectUpdateCard(state, cardId),
  );
  const grade = useSelector((state: RootReducerType) => selectGradeCard(state, cardId));

  const dataNew = new Date(updated);

  if (isMyPack) {
    return (
      <Flex justifyContent="center">
        <TableItem flexBasis="35%">{question}</TableItem>
        <TableItem flexBasis="35%">{answer}</TableItem>
        <TableItem flexBasis="10%">{dataNew.toLocaleDateString()}</TableItem>
        <TableItem flexBasis="10%">{grade}</TableItem>
        <TableItem flexBasis="10%">
          <SuperButton size="small">Edit</SuperButton>
          <SuperButton size="small">Delete</SuperButton>
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

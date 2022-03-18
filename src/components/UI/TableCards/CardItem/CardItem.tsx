import { memo } from 'react';

import { useSelector } from 'react-redux';

import { TableItem } from './style';

import { SuperButton } from 'components';
import { RootReducerType } from 'store';
import {
  selectAnswer,
  selectGradeCard,
  selectQuestion,
  selectUpdateCard,
} from 'store/selectors';

export const CardItem = memo(({ id, isMyPack }: { id: string; isMyPack: boolean }) => {
  const question = useSelector((state: RootReducerType) => selectQuestion(state, id));
  const answer = useSelector((state: RootReducerType) => selectAnswer(state, id));
  const updated = useSelector((state: RootReducerType) => selectUpdateCard(state, id));
  const grade = useSelector((state: RootReducerType) => selectGradeCard(state, id));

  const dataNew = new Date(updated);

  if (isMyPack) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TableItem width="35%">{question}</TableItem>
        <TableItem width="35%">{answer}</TableItem>
        <TableItem width="10%">{dataNew.toLocaleDateString()}</TableItem>
        <TableItem width="10%">{grade}</TableItem>
        <TableItem width="10%">
          <SuperButton size="small">Edit</SuperButton>
          <SuperButton size="small">Delete</SuperButton>
        </TableItem>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableItem width="40%">{question}</TableItem>
      <TableItem width="40%">{answer}</TableItem>
      <TableItem width="10%">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem width="10%">{grade}</TableItem>
    </div>
  );
});

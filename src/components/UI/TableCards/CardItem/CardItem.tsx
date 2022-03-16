import { memo } from 'react';

import { useSelector } from 'react-redux';

import { TableItem } from 'components/UI/TableCardsPack/PackItem/style';
import { RootReducerType } from 'store';
import {
  selectAnswer,
  selectGradeCard,
  selectQuestion,
  selectUpdateCard,
} from 'store/selectors/selectCard';

export const CardItem = memo(({ id }: { id: string }) => {
  const question = useSelector((state: RootReducerType) => selectQuestion(state, id));
  const answer = useSelector((state: RootReducerType) => selectAnswer(state, id));
  const updated = useSelector((state: RootReducerType) => selectUpdateCard(state, id));
  const grade = useSelector((state: RootReducerType) => selectGradeCard(state, id));

  const dataNew = new Date(updated);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableItem width="300px">{question}</TableItem>
      <TableItem width="300px">{answer}</TableItem>
      <TableItem width="100px">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem width="100px">{grade}</TableItem>
    </div>
  );
});

import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DebounceSearchField, TableCards } from 'components';
import { setSearchAnswer, setSearchQuestion } from 'store/actions';
import {
  selectSearchAnswer,
  selectSearchQuestion,
  selectSortCard,
} from 'store/selectors';
import { getCardTC } from 'store/thunks';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { id, name } = useParams<'id' | 'name'>();

  const sortCard = useSelector(selectSortCard);
  const searchQuestion = useSelector(selectSearchQuestion);
  const searchAnswer = useSelector(selectSearchAnswer);

  useEffect(() => {
    if (id) {
      dispatch(getCardTC(id, sortCard, searchQuestion, searchAnswer));
    }
  }, [sortCard, searchQuestion, searchAnswer]);

  const searchByQuestion = useCallback((question: string): void => {
    dispatch(setSearchQuestion(question));
  }, []);

  const searchByAnswer = useCallback((answer: string): void => {
    dispatch(setSearchAnswer(answer));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {name}
      <div
        style={{
          display: 'flex',
          margin: '20px',
          alignItems: 'center',
        }}
      >
        Question:
        <DebounceSearchField searchValue={searchByQuestion} />
        Answer:
        <DebounceSearchField searchValue={searchByAnswer} />
      </div>
      <TableCards />
    </div>
  );
});

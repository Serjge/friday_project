import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { CardListWrapper, SearchWrapper } from './style';

import { DebounceSearchField, TableCards } from 'components';
import { PATH } from 'enum';
import { setSearchAnswerCards, setSearchQuestionCards } from 'store/actions';
import {
  selectIsLogin,
  selectSearchAnswer,
  selectSearchQuestion,
  selectSortCard,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { id, name } = useParams<'id' | 'name'>();

  const isLogin = useSelector(selectIsLogin);
  const sortCard = useSelector(selectSortCard);
  const searchAnswer = useSelector(selectSearchAnswer);
  const searchQuestion = useSelector(selectSearchQuestion);

  useEffect(() => {
    if (id) {
      dispatch(getCardsTC(id, sortCard, searchQuestion, searchAnswer));
    }
  }, [sortCard, searchQuestion, searchAnswer]);

  const searchByQuestion = useCallback((question: string): void => {
    dispatch(setSearchQuestionCards(question));
  }, []);

  const searchByAnswer = useCallback((answer: string): void => {
    dispatch(setSearchAnswerCards(answer));
  }, []);

  if (!isLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <CardListWrapper>
      {name}
      <SearchWrapper>
        <DebounceSearchField placeholder="Question:" searchValue={searchByQuestion} />
        <DebounceSearchField placeholder="Answer:" searchValue={searchByAnswer} />
      </SearchWrapper>
      <TableCards />
    </CardListWrapper>
  );
});

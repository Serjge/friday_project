import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { CardListWrapper, SearchWrapper } from './style';

import { DebounceSearchField, Pagination, TableCards, AddCard } from 'components';
import { CountDecksOnPage, PATH } from 'enum';
import {
  rerenderCardAC,
  setCurrentPageCardsAC,
  setPageCountCardsAC,
  setSearchAnswerCardsAC,
  setSearchQuestionCardsAC,
} from 'store/actions';
import {
  selectCurrentPageCards,
  selectIsLogin,
  selectPageCountCards,
  selectRerenderCards,
  selectTotalCountCards,
} from 'store/selectors';
import { getCardsTC } from 'store/thunks';
import { getNumberValuesFromEnum } from 'utils';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { id, name } = useParams<'id' | 'name'>();

  const isLogin = useSelector(selectIsLogin);
  const rerender = useSelector(selectRerenderCards);
  const pagesCount = useSelector(selectPageCountCards);
  const currentPage = useSelector(selectCurrentPageCards);
  const totalCountCards = useSelector(selectTotalCountCards);
  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  useEffect(() => {
    if (id) {
      dispatch(getCardsTC(id));
    }
  }, [rerender, currentPage, pagesCount]);

  const searchByQuestion = useCallback((question: string): void => {
    dispatch(setSearchQuestionCardsAC(question));
    dispatch(rerenderCardAC());
  }, []);

  const searchByAnswer = useCallback((answer: string): void => {
    dispatch(setSearchAnswerCardsAC(answer));
    dispatch(rerenderCardAC());
  }, []);

  const setCurrentPageCards = useCallback((value: number): void => {
    dispatch(setCurrentPageCardsAC(value));
  }, []);

  const setCardsCountCards = useCallback((value: number): void => {
    dispatch(setPageCountCardsAC(value));
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
        <AddCard packId={id} />
      </SearchWrapper>
      <TableCards />
      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        countDecksOnPage={countDecksOnPage}
        setCurrentPage={setCurrentPageCards}
        setPacksCount={setCardsCountCards}
        totalCount={totalCountCards}
      />
    </CardListWrapper>
  );
});

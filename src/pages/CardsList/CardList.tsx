import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { CardListWrapper, SearchWrapper } from './style';

import { DebounceSearchField, Pagination, SuperButton, TableCards } from 'components';
import { CountDecksOnPage, PATH } from 'enum';
import {
  rerenderCardAC,
  setCurrentPageCardsAC,
  setPageCountCardsAC,
  setSearchAnswerCards,
  setSearchQuestionCards,
} from 'store/actions';
import {
  selectCurrentPageCards,
  selectIsLogin,
  selectPackUserId,
  selectPageCountCards,
  selectRerenderCards,
  selectTotalCountCards,
  selectUserId,
} from 'store/selectors';
import { addCardTC, getCardsTC } from 'store/thunks';
import { getNumberValuesFromEnum } from 'utils';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { id, name } = useParams<'id' | 'name'>();

  const userId = useSelector(selectUserId);
  const isLogin = useSelector(selectIsLogin);
  const packUserId = useSelector(selectPackUserId);
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
    dispatch(setSearchQuestionCards(question));
    dispatch(rerenderCardAC());
  }, []);

  const searchByAnswer = useCallback((answer: string): void => {
    dispatch(setSearchAnswerCards(answer));
    dispatch(rerenderCardAC());
  }, []);

  const onAddCardClick = (): void => {
    if (id) {
      dispatch(addCardTC(id));
    }
  };

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
        <SuperButton hidden={userId !== packUserId} onClick={onAddCardClick}>
          Add Card
        </SuperButton>
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

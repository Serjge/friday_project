import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { CardListWrapper, SearchWrapper } from './style';

import { DebounceSearchField, SuperButton, TableCards } from 'components';
import { PATH } from 'enum';
import {
  rerenderCardAC,
  setSearchAnswerCards,
  setSearchQuestionCards,
} from 'store/actions';
import {
  selectIsLogin,
  selectPackUserId,
  selectRerenderCards,
  selectUserId,
} from 'store/selectors';
import { addCardTC, getCardsTC } from 'store/thunks';

export const CardList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { id, name } = useParams<'id' | 'name'>();

  const isLogin = useSelector(selectIsLogin);
  const rerender = useSelector(selectRerenderCards);
  const userId = useSelector(selectUserId);
  const packUserId = useSelector(selectPackUserId);

  useEffect(() => {
    if (id) {
      dispatch(getCardsTC(id));
    }
  }, [rerender]);

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
    </CardListWrapper>
  );
});

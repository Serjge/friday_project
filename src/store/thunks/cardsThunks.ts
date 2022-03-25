import { cardsApi } from 'api';
import { StatusCode } from 'enum';
import { rerenderCardAC, setCardsAC } from 'store/actions';
import {
  selectCard,
  selectCurrentPageCards,
  selectPageCountCards,
  selectSearchAnswer,
  selectSearchQuestion,
  selectSortCard,
} from 'store/selectors';
import { RootReducerType } from 'store/store';
import { AddCardType, AppThunkType } from 'types';
import { handleError } from 'utils';

export const getCardsTC =
  (cardsPackId: string, min?: number, max?: number): AppThunkType =>
  async (dispatch, getState: () => RootReducerType) => {
    try {
      const sortCards = selectSortCard(getState());
      const searchAnswer = selectSearchAnswer(getState());
      const searchQuestion = selectSearchQuestion(getState());
      const pagesCount = selectPageCountCards(getState());
      const currentPage = selectCurrentPageCards(getState());

      const { status, data } = await cardsApi.getCards(
        cardsPackId,
        searchAnswer,
        searchQuestion,
        min,
        max,
        sortCards,
        pagesCount,
        currentPage,
      );

      if (status === StatusCode.Success) {
        dispatch(setCardsAC(data));
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };

export const addCardTC =
  (cardsPackId: string, question: string, answer: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await cardsApi.addCard(cardsPackId, question, answer);

      if (status === StatusCode.Created) {
        dispatch(rerenderCardAC());
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };

export const deleteCardTC =
  (cardId: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await cardsApi.deleteCard(cardId);

      if (status === StatusCode.Success) {
        dispatch(rerenderCardAC());
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };

export const updateCardTC =
  (cardsId: string, card: Partial<Omit<AddCardType, 'cardsPackId'>>): AppThunkType =>
  async (dispatch, getState: () => RootReducerType) => {
    try {
      const stateCard = selectCard(getState(), cardsId);
      const { status } = await cardsApi.updateCard(cardsId, { ...stateCard, ...card });

      if (status === StatusCode.Success) {
        dispatch(rerenderCardAC());
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };

export const setGradeCardTC = // точно такая санка как и deleteCardTC, как сократить код?

    (id: string, grade: number): AppThunkType =>
    async dispatch => {
      try {
        const { status } = await cardsApi.setGrade({ card_id: id, grade });

        if (status === StatusCode.Success) {
          dispatch(rerenderCardAC());
        }
      } catch (error) {
        handleError(error, dispatch, StatusCode.Bad_Request);
      }
    };

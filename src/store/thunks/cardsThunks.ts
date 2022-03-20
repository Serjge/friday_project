import { AxiosError } from 'axios';

import { cardsApi } from 'api';
import { statusCode } from 'enum';
import { rerenderCardAC, setCards, setErrorMessage } from 'store/actions';
import { AppThunkType } from 'types';

export const getCardsTC =
  (
    cardsPackId: string,
    sortCards?: string,
    cardQuestion?: string,
    cardAnswer?: string,
    min?: number,
    max?: number,
    pageCount?: number,
    page?: number,
  ): AppThunkType =>
  async dispatch => {
    try {
      const { status, data } = await cardsApi.getCards(
        cardsPackId,
        cardAnswer,
        cardQuestion,
        min,
        max,
        sortCards,
        pageCount,
        page,
      );

      if (status === statusCode.OK) {
        dispatch(setCards(data));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessage(error));
      } else {
        dispatch(setErrorMessage(message));
      }
    }
  };

export const addCardTC =
  (cardsPackId: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await cardsApi.addCard(cardsPackId);

      if (status === statusCode.created) {
        dispatch(rerenderCardAC());
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessage(error));
      } else {
        dispatch(setErrorMessage(message));
      }
    }
  };

export const deleteCardTC =
  (cardId: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await cardsApi.deleteCard(cardId);

      if (status === statusCode.OK) {
        dispatch(rerenderCardAC());
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessage(error));
      } else {
        dispatch(setErrorMessage(message));
      }
    }
  };

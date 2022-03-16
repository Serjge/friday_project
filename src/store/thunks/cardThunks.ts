import { AxiosError } from 'axios';

import { cardsApi } from 'api';
import { statusCode } from 'enum';
import { setErrorMessage } from 'store/actions';
import { AppThunkType } from 'types';

export const getCardTC =
  (
    cardsPackId: string,
    cardAnswer: string,
    cardQuestion: string,
    min: number,
    max: number,
    sortCards: string,
    pageCount: number,
    page: number,
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
        console.log(data);
        // dispatch(setCards(data));
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

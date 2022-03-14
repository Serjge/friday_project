import { AxiosError } from 'axios';

import { cardsApi } from 'api';
import { statusCode } from 'enum';
import { setCards, setErrorMessage } from 'store/actions';
import { AppThunkType } from 'types';

export const getCardsTC =
  (
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: string,
    pageCount?: number,
    page?: number,
    userId?: string,
  ): AppThunkType =>
  async dispatch => {
    try {
      const { status, data } = await cardsApi.getCards(
        packName,
        min,
        max,
        sortPacks,
        pageCount,
        page,
        userId,
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

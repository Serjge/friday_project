import { AxiosError } from 'axios';

import { cardsApi } from 'api/cardsApi';
import { statusCode } from 'enum';
import { setCards, setErrorMessage, setStatus } from 'store/actions';
import { AppThunkType } from 'types';

export const registrationTC = (): AppThunkType => async dispatch => {
  try {
    dispatch(setStatus('loading'));

    const { status, data } = await cardsApi.getCards();

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
  } finally {
    dispatch(setStatus('completed'));
  }
};

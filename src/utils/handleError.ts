import { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { setErrorMessageAC } from 'store/actions';

export const handleError = (
  err: unknown,
  dispatch: Dispatch,
  statusCode?: number,
  statusCodeAdditional?: number,
): void => {
  const { response, message } = err as AxiosError;
  const error = response?.data.error;
  const status = response?.status;

  if ((status && status === statusCode) || status === statusCodeAdditional) {
    dispatch(setErrorMessageAC(error));
  }
  if (!status) {
    dispatch(setErrorMessageAC(message));
  }
  if (status && status !== statusCode && status !== statusCodeAdditional) {
    dispatch(setErrorMessageAC('Unknown error'));
  }
};

import { AxiosError } from 'axios';

import { registrationApi } from 'api';
import { statusCode } from 'enum';
import { setErrorMessage, setRegistrationIsCompleted, setStatus } from 'store/actions';
import { AppThunkType } from 'types';

export const registrationTC =
  (email: string, password: string): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setStatus('loading'));

      const { status } = await registrationApi.registration({ email, password });

      if (status === statusCode.created) {
        dispatch(setRegistrationIsCompleted(true));
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

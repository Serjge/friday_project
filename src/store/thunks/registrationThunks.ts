import { AxiosError } from 'axios';

import { registrationApi } from 'api/registrationApi';
import { statusCode } from 'enum';
import { setErrorMessage, setRegistrationIsCompleted, setStatus } from 'store/actions';
import { AppThunkType } from 'types';

export const registrationTC =
  (email: string, password: string): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setStatus('loading'));

      const response = await registrationApi.registration({ email, password });

      const { status } = response;

      if (status === statusCode.created) {
        dispatch(setRegistrationIsCompleted(true));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;

      if (response?.status === statusCode.Bad_Request) {
        dispatch(setErrorMessage(error));
      } else {
        dispatch(setErrorMessage(message));
      }
    } finally {
      dispatch(setStatus('completed'));
    }
  };

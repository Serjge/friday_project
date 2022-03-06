import { AxiosError } from 'axios';

import { registrationApi } from 'api/registrationApi';
import { statusCode } from 'enum';
import { setError, setIsCompleted, setStatus } from 'store/actions';
import { AppThunkType } from 'types';

export const registrationTC =
  (email: string, password: string): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setStatus('loading'));
      const response = await registrationApi.registration({ email, password });
      if (response.status === statusCode.created) {
        dispatch(setIsCompleted(true));
      }
    } catch (errorCat) {
      const { response, message } = errorCat as AxiosError;

      if (response?.status === statusCode.Bad_Request) {
        dispatch(setError(response.data.error));
      } else {
        dispatch(setError(message));
      }
    } finally {
      dispatch(setStatus('completed'));
    }
  };

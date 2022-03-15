import { AxiosError } from 'axios';

import { passwordApi } from '../../api/passwordApi';
import { statusCode } from '../../enum';
import { AppThunkType, ForgotPasswordSendType } from '../../types';
import { setErrorMessage } from '../actions';

export const forgotPasswordTC =
  (data: ForgotPasswordSendType): AppThunkType =>
  async dispatch => {
    try {
      await passwordApi.forgot(data);
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

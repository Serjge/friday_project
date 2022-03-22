import { AxiosError } from 'axios';

import { passwordApi } from 'api';
import { statusCode } from 'enum';
import { setErrorMessageAC, changePasswordAC } from 'store/actions';
import { AppThunkType, ForgotPasswordSendType, SendNewPasswordType } from 'types';

export const forgotPasswordTC =
  (data: ForgotPasswordSendType): AppThunkType =>
  async dispatch => {
    try {
      // true
      await passwordApi.forgotPassword(data);
      // false
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessageAC(error));
      } else {
        dispatch(setErrorMessageAC(message));
      }
    }
  };

export const sendNewPasswordTC =
  (data: SendNewPasswordType): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await passwordApi.sendNewPassword(data);

      if (status === statusCode.OK) {
        dispatch(changePasswordAC(false));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Unauthorized || status === statusCode.Bad_Request) {
        dispatch(setErrorMessageAC(error));
      } else {
        dispatch(setErrorMessageAC(message));
      }
    }
  };

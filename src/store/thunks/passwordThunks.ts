import { passwordApi } from 'api';
import { StatusCode } from 'enum';
import { changePasswordAC } from 'store/actions';
import { AppThunkType, ForgotPasswordSendType, SendNewPasswordType } from 'types';
import { handleError } from 'utils';

export const forgotPasswordTC =
  (data: ForgotPasswordSendType): AppThunkType =>
  async dispatch => {
    try {
      await passwordApi.forgotPassword(data);
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };

export const sendNewPasswordTC =
  (data: SendNewPasswordType): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await passwordApi.sendNewPassword(data);

      if (status === StatusCode.Success) {
        dispatch(changePasswordAC(false));
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Unauthorized, StatusCode.Bad_Request);
    }
  };

import { AxiosError } from 'axios';

import { loginAPI } from 'api';
import { statusCode } from 'enum';
import { authMeAC, setErrorMessageAC, setIsLoginAC } from 'store/actions';
import { AppThunkType, LoginApiPayloadType } from 'types';

export const setLoginDataThunkCreator =
  (loginData: LoginApiPayloadType): AppThunkType =>
  async dispatch => {
    try {
      const { data, status } = await loginAPI.login(loginData);

      if (status === statusCode.OK) {
        dispatch(authMeAC(data));
        dispatch(setIsLoginAC(true));
        dispatch(setErrorMessageAC(''));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Unauthorized) {
        dispatch(setErrorMessageAC(error));
      } else {
        dispatch(setErrorMessageAC(message));
      }
    }
  };

export const logOutThunkCreator = (): AppThunkType => async dispatch => {
  try {
    const { status } = await loginAPI.logOut();

    if (status === statusCode.OK) {
      dispatch(setIsLoginAC(false));
    }
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

import { AxiosError } from 'axios';

import { loginAPI } from 'api';
import { statusCode } from 'enum';
import { setErrorMessage, setIsLoginAC } from 'store/actions';
import { AuthMeAC } from 'store/actions/ProfileAction';
import { AppThunkType, LoginApiPayloadType } from 'types';

export const setLoginDataThunkCreator =
  (data: LoginApiPayloadType): AppThunkType =>
  async dispatch => {
    try {
      loginAPI.login(data).then(res => {
        if (res.status === statusCode.OK) {
          dispatch(AuthMeAC(res.data));
          dispatch(setIsLoginAC(true));
          dispatch(setErrorMessage(''));
        }
      });
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;

      const error = response
        ? response.data.error
        : `${message}, more details in the console`;
      dispatch(setErrorMessage(error));
    }
  };

export const logOutThunkCreator = (): AppThunkType => async dispatch => {
  try {
    loginAPI.logOut().then(res => {
      if (res.status === statusCode.OK) {
        dispatch(setIsLoginAC(false));
      }
    });
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  }
};

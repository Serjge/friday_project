import { loginAPI } from 'api';
import { StatusCode } from 'enum';
import { authMeAC, setErrorMessageAC, setIsLoginAC } from 'store/actions';
import { AppThunkType, LoginApiPayloadType } from 'types';
import { handleError } from 'utils';

export const setLoginDataThunkCreator =
  (loginData: LoginApiPayloadType): AppThunkType =>
  async dispatch => {
    try {
      const { data, status } = await loginAPI.login(loginData);

      if (status === StatusCode.Success) {
        dispatch(authMeAC(data));
        dispatch(setIsLoginAC(true));
        dispatch(setErrorMessageAC(null));
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    }
  };

export const logOutThunkCreator = (): AppThunkType => async dispatch => {
  try {
    const { status } = await loginAPI.logOut();
    if (status === StatusCode.Success) {
      dispatch(setIsLoginAC(false));
    }
  } catch (error) {
    handleError(error, dispatch, StatusCode.Bad_Request);
  }
};

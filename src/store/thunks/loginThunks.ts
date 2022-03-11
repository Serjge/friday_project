import { loginAPI } from 'api';
import { statusCode } from 'enum';
import { setErrorMessage, setIsLoginAC } from 'store/actions';
import { AuthMeAC } from 'store/actions/ProfileAction';
import { AppThunkType, LoginApiPayloadType } from 'types';

export const setLoginDataThunkCreator =
  (data: LoginApiPayloadType): AppThunkType =>
  dispatch =>
    loginAPI
      .login(data)
      .then(res => {
        if (res.status === statusCode.OK) {
          dispatch(AuthMeAC(res.data));
          dispatch(setIsLoginAC(true));
          dispatch(setErrorMessage(''));
        }
      })
      .catch(rej => {
        const error = rej.response
          ? rej.response.data.error
          : `${rej.message}, more details in the console`;
        dispatch(setErrorMessage(error));
      });

export const logOutThunkCreator = (): AppThunkType => dispatch => {
  loginAPI.logOut().then(res => {
    if (res.status === statusCode.OK) {
      dispatch(setIsLoginAC(false));
    }
  });
};

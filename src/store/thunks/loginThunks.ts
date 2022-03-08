import { loginAPI } from 'api';
import { seLoginDataAC, setErrorAC, setLogOutAC } from 'store/actions';
import { AppThunkType, LoginApiPayloadType } from 'types';

export const setLoginDataThunkCreator =
  (data: LoginApiPayloadType): AppThunkType =>
  dispatch => {
    loginAPI
      .login(data)
      .then(res => {
        if (res.data.token) {
          dispatch(seLoginDataAC(res.data));
          dispatch(setErrorAC(''));
        }
      })
      .catch(rej => {
        const error = rej.response
          ? rej.response.data.error
          : `${rej.message}, more details in the console`;
        dispatch(setErrorAC(error));
      });
  };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isLoginThunkCreator = (): AppThunkType => dispatch => {
  loginAPI.isLogin().then(res => {
    console.dir(res);
  });
};

export const logOutThunkCreator = (): AppThunkType => dispatch => {
  loginAPI.logOut().then(res => {
    if (res.data.info) {
      dispatch(setLogOutAC());
    }
  });
};

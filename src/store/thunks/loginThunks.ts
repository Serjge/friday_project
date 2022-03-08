import { Dispatch } from 'redux';

import { loginAPI } from 'api';
import { seLoginDataAC, setErrorAC, setLogOutAC } from 'store/actions';
import { LoginApiPayloadType } from 'types';

export const setLoginDataThunkCreator =
  (data: LoginApiPayloadType) => (dispatch: Dispatch) => {
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
export const isLoginThunkCreator = () => (dispatch: Dispatch) => {
  loginAPI.isLogin().then(res => {
    console.dir(res);
  });
};

export const logOutThunkCreator = () => (dispatch: Dispatch) => {
  loginAPI.logOut().then(res => {
    if (res.data.info) {
      dispatch(setLogOutAC());
    }
  });
};

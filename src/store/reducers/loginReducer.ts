import { Dispatch } from 'redux';

import { loginAPI, LoginApiPayloadType } from 'api/instance';
import { AppActionsType } from 'types/actions';

export type LoginStateType = {
  _id: string;
  email: string;
  rememberMe: false;
  isAdmin: false;
  name: string;
  verified: false;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
  avatar: string;
  deviceTokens: [
    {
      _id: string;
      device: string;
      token: string;
      tokenDeathTime: number;
    },
  ];
};

export const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOGOUT = 'SET_LOGOUT';

export type SeLoginDataACType = ReturnType<typeof seLoginDataAC>;
export type SeErrorACType = ReturnType<typeof setErrorAC>;
export type SeLogOutACType = ReturnType<typeof setLogOutAC>;

export const seLoginDataAC = (data: LoginStateType) =>
  ({ type: SET_LOGIN_DATA, data } as const);
export const setErrorAC = (error: string) =>
  ({
    type: SET_ERROR,
    error,
  } as const);
export const setLogOutAC = () =>
  ({
    type: SET_LOGOUT,
    token: 'null',
  } as const);

type LoginStateWithErrorKey = LoginStateType & {
  error: string;
};

const initialState: LoginStateWithErrorKey = {
  _id: '5eecf82a3ed8f700042f1186',
  email: 'nya-admin@nya.nya',
  rememberMe: false,
  isAdmin: false,
  name: 'dfg',
  verified: false,
  publicCardPacksCount: 368,
  created: '2020-06-19T17:38:50.679Z',
  updated: '2022-03-05T13:17:59.159Z',
  __v: 0,
  token: 'ad78f960-9c86-11ec-86e1-556be06f6bb3',
  tokenDeathTime: 1646497079158,
  avatar: '',
  deviceTokens: [
    {
      _id: '60e73dbfbc460736f0302b0f',
      device: 'aedbb9f0-e016-11eb-9443-59b42c588954',
      token: 'aedb6bd0-e016-11eb-9443-59b42c588954',
      tokenDeathTime: 1625778159245,
    },
  ],
  error: '',
};

export const loginReducer = (
  state = initialState,
  action: AppActionsType,
): LoginStateWithErrorKey => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return { ...state, ...action.data };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_LOGOUT:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

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

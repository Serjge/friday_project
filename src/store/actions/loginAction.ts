import { LoginStateType } from 'types';

export const SET_LOGIN_DATA = 'LOGIN/SET_LOGIN_DATA';
export const SET_ERROR = 'LOGIN/SET_ERROR';
export const SET_LOGOUT = 'LOGIN/SET_LOGOUT';

export const seLoginDataAC = (data: LoginStateType) =>
  ({
    type: SET_LOGIN_DATA,
    payload: {
      data,
    },
  } as const);

export const setErrorAC = (error: string) =>
  ({
    type: SET_ERROR,
    payload: {
      error,
    },
  } as const);

export const setLogOutAC = () =>
  ({
    type: SET_LOGOUT,
    payload: {
      token: 'null',
    },
  } as const);

import axios, { AxiosResponse } from 'axios';

import { LoginStateType } from 'store/reducers/loginReducer';

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'http://109.229.69.21:7542/2.0/',
  withCredentials: true,
});

export const loginAPI = {
  login(data: LoginApiPayloadType): CommonResponseTye<LoginStateType> {
    return instance.post<LoginStateType>('/auth/login', data);
  },
  logOut(): CommonResponseTye<LogOutType> {
    return instance.delete<LogOutType>('/auth/me');
  },
  isLogin() {
    return instance.post<LogOutType>('/auth/me');
  },
};

export type LoginApiPayloadType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LogOutType = {
  info: string;
};

type CommonResponseTye<T = {}> = Promise<AxiosResponse<T>>;

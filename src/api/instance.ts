import axios, { AxiosResponse } from 'axios';

import { LoginStateType } from '../types';

export const instance = axios.create({
  baseURL:
    'http://localhost:7542/2.0/' ||
    process.env.REACT_APP_BACK_URL ||
    process.env.REACT_APP_BASE_URL,

  withCredentials: true,
});

export const loginAPI = {
  login(data: LoginApiPayloadType) {
    return instance.post<LoginStateType>('/auth/login', data).then(res => res);
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

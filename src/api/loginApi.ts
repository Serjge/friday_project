import { instance } from 'api';
import {
  AuthMeType,
  CommonResponseType,
  LoginApiPayloadType,
  LoginStateType,
  LogOutType,
} from 'types';

export const loginAPI = {
  login(data: LoginApiPayloadType) {
    return instance.post<AuthMeType>('/auth/login', data);
  },
  logOut(): CommonResponseType<LogOutType> {
    return instance.delete<LogOutType>('/auth/me');
  },
  isLogin() {
    return instance.post<LoginStateType>('/auth/me');
  },
};

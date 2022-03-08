import { instance } from 'api/instance';
import {
  CommonResponseType,
  LoginApiPayloadType,
  LoginStateType,
  LogOutType,
} from 'types';

export const loginAPI = {
  login(data: LoginApiPayloadType) {
    return instance.post<LoginStateType>('/auth/login', data).then(res => res);
  },
  logOut(): CommonResponseType<LogOutType> {
    return instance.delete<LogOutType>('/auth/me');
  },
  isLogin() {
    return instance.post<LogOutType>('/auth/me');
  },
};

import { instance } from 'api/instance';
import {
  CommonResponseType,
  LoginApiPayloadType,
  LoginStateType,
  LogOutType,
} from 'types';
import { AuthMeType } from 'types/ProfileType';

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

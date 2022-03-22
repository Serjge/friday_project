import { instance } from 'api';
import { PATHS_API } from 'enum';
import {
  AuthMeType,
  CommonResponseType,
  LoginApiPayloadType,
  LoginStateType,
  LogOutType,
} from 'types';

export const loginAPI = {
  login(data: LoginApiPayloadType) {
    return instance.post<AuthMeType>(PATHS_API.Auth_login, data);
  },
  logOut(): CommonResponseType<LogOutType> {
    return instance.delete<LogOutType>(PATHS_API.Auth_me);
  },
  isLogin() {
    return instance.post<LoginStateType>(PATHS_API.Auth_me);
  },
};

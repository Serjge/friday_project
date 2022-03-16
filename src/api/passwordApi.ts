import { instance } from './instance';

import {
  ForgotPasswordGetType,
  ForgotPasswordSendType,
  SendNewPasswordAnswerType,
  SendNewPasswordType,
} from 'types';

export const passwordApi = {
  forgotPassword(data: ForgotPasswordSendType) {
    return instance.post<ForgotPasswordGetType>(
      'https://neko-back.herokuapp.com/2.0/auth/forgot',
      data,
    );
  },
  sendNewPassword(data: SendNewPasswordType) {
    return instance.post<SendNewPasswordAnswerType>(
      'http://localhost:7542/2.0/auth/set-new-password',
      data,
    );
  },
};

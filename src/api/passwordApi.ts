import { ForgotPasswordSendType } from '../types';
import { ForgotPasswordGetType } from '../types/PasswordType';

import { instance } from './instance';

export const passwordApi = {
  forgot(data: ForgotPasswordSendType) {
    return instance.post<ForgotPasswordGetType>(
      'https://neko-back.herokuapp.com/2.0/auth/forgot',
      data,
    );
  },
};

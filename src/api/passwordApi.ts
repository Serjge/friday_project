import { instance } from './instance';

import { ForgotPasswordGetType, ForgotPasswordSendType } from 'types';

export const passwordApi = {
  forgot(data: ForgotPasswordSendType) {
    return instance.post<ForgotPasswordGetType>(
      'https://neko-back.herokuapp.com/2.0/auth/forgot',
      data,
    );
  },
};

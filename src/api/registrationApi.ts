import { AxiosResponse } from 'axios';

import { instance } from 'api/instance';

type RegistrationParamsType = {
  email: string;
  password: string;
};

export const registrationApi = {
  registration(data: RegistrationParamsType) {
    return instance.post<RegistrationParamsType, AxiosResponse<{ addedUser: {} }>>(
      '/auth/register',
      data,
    );
  },
};

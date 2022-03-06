import { instance } from 'api/instance';

type RegistrationParamsType = {
  email: string;
  password: string;
};

export const registrationApi = {
  registration(data: RegistrationParamsType) {
    return instance.post<{ addedUser: {} }>('/auth/register', data);
  },
};

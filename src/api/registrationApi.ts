import { instance } from 'api';
import { RegistrationParamsType } from 'types';

export const registrationApi = {
  registration(data: RegistrationParamsType) {
    return instance.post<{ addedUser: {} }>('/auth/register', data);
  },
};

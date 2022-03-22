import { instance } from 'api';
import { PATHS_API } from 'enum';
import { RegistrationParamsType } from 'types';

export const registrationApi = {
  registration(data: RegistrationParamsType) {
    return instance.post<{ addedUser: {} }>(PATHS_API.Auth_register, data);
  },
};

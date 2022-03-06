// type RegistrationParamsType = {
//   email: string;
//   password: string;
// };

import { instance } from 'api/instance';

export const registrationApi = {
  registration(email: string, password: string) {
    return instance.post('/auth/register', { email, password });
  },
};

// <RegistrationParamsType, AxiosResponse<{ addedUser: {} }>>

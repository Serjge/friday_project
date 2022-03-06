/* eslint-disable @typescript-eslint/no-magic-numbers */
import { AxiosError } from 'axios';

import { registrationApi } from 'api/registrationApi';
import { AppThunkType } from 'types';

export const registrationTC =
  (email: string, password: string): AppThunkType =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async dispatch => {
    try {
      const res = await registrationApi.registration(email, password);
      if (res.status === 201) console.log(res.data);
    } catch (error) {
      const { response } = error as AxiosError;
      if (response?.status === 400) {
        console.log(response.data.error);
      }
    }
  };

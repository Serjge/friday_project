import { AxiosError } from 'axios';

import { packApi } from 'api/packApi';
import { statusCode } from 'enum';
import { setResultMessageAddPackAC } from 'store/actions/addPackAction';
import { AppThunkType } from 'types';

export const addPackTC =
  (newTitle: string): AppThunkType =>
  async dispatch => {
    try {
      const { status } = await packApi.set(newTitle);

      if (status === statusCode.created) {
        dispatch(setResultMessageAddPackAC('Pack created'));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setResultMessageAddPackAC(error));
      } else {
        dispatch(setResultMessageAddPackAC(message));
      }
    }
  };

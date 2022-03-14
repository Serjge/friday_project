import { AxiosError } from 'axios';

import { addPackApi } from 'api/addPackApi';
import { statusCode } from 'enum';
import { setResultMessageAddPackAC } from 'store/actions/addPackAction';
import { AppThunkType } from 'types';

export const addPackTC = (): AppThunkType => async dispatch => {
  try {
    const { status } = await addPackApi.set();

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

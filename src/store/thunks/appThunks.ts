import { AxiosError } from 'axios';

import { loginAPI } from 'api';
import { statusCode } from 'enum';
import { initializeMe, setErrorMessage, setIsLoginAC } from 'store/actions';
import { AppThunkType } from 'types';

export const initializeMeTC = (): AppThunkType => async dispatch => {
  try {
    const { status } = await loginAPI.isLogin();

    if (status === statusCode.OK) {
      dispatch(setIsLoginAC(true));
    }
  } catch (errorCatch) {
    const { response, message } = errorCatch as AxiosError;
    const error = response?.data.error;
    const status = response?.status;

    if (status === statusCode.Unauthorized) {
      dispatch(setErrorMessage(error));
    } else {
      dispatch(setErrorMessage(message));
    }
  } finally {
    dispatch(initializeMe(true));
  }
};

import { AxiosError } from 'axios';

import { loginAPI } from 'api';
import { statusCode } from 'enum';
import { initializeMe, setErrorMessage, setIsLoginAC } from 'store/actions';
import { AppThunkType } from 'types';

export const initializeMeTC = (): AppThunkType => async dispatch => {
  try {
    const response = await loginAPI.isLogin();
    const { status } = response;

    if (status === statusCode.OK) {
      dispatch(setIsLoginAC(true));
    }
  } catch (errorCat) {
    const { response, message } = errorCat as AxiosError;
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

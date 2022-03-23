import { loginAPI } from 'api';
import { StatusCode } from 'enum';
import { initializeMeAC, setIsLoginAC } from 'store/actions';
import { AppThunkType } from 'types';
import { handleError } from 'utils';

export const initializeMeTC = (): AppThunkType => async dispatch => {
  try {
    const { status } = await loginAPI.isLogin();

    if (status === StatusCode.Success) {
      dispatch(setIsLoginAC(true));
    }
  } catch (error) {
    handleError(error, dispatch, StatusCode.Unauthorized);
  } finally {
    dispatch(initializeMeAC(true));
  }
};

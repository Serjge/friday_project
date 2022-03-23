import { registrationApi } from 'api';
import { StatusCode } from 'enum';
import { setRegistrationIsCompletedAC, setStatusAC } from 'store/actions';
import { AppThunkType } from 'types';
import { handleError } from 'utils';

export const registrationTC =
  (email: string, password: string): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setStatusAC('loading'));

      const { status } = await registrationApi.registration({ email, password });

      if (status === StatusCode.Created) {
        dispatch(setRegistrationIsCompletedAC(true));
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Bad_Request);
    } finally {
      dispatch(setStatusAC('completed'));
    }
  };

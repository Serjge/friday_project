import { AxiosError } from 'axios';

import { profileApi } from 'api';
import { statusCode } from 'enum';
import {
  AuthMeAC,
  ChangePersonalAvatarAC,
  ChangePersonalNameAC,
  initializeMe,
  setErrorMessage,
  setIsLoginAC,
} from 'store/actions';
import { AppThunkType } from 'types';

export const authMeTC = (): AppThunkType => async dispatch => {
  try {
    const { status, data } = await profileApi.authMe();
    if (status === statusCode.OK) {
      dispatch(AuthMeAC(data));
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

export const editProfileNameTC =
  (name: string): AppThunkType =>
  async dispatch => {
    try {
      const { status, data } = await profileApi.editPersonalName(name);
      if (status === statusCode.OK) {
        dispatch(ChangePersonalNameAC(data.updatedUser.name));
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
    }
  };

export const editPersonalAvatarTC =
  (name: string, avatar: string): AppThunkType =>
  dispatch =>
    profileApi
      .editPersonalAvatar(name, avatar)
      .then(res => {
        dispatch(ChangePersonalAvatarAC(res.data.updatedUser.avatar));
      })
      .catch(e => {
        console.log(e);
      });

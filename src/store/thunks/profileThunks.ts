import { AxiosError } from 'axios';

import { profileApi } from 'api';
import { statusCode } from 'enum';
import {
  authMeAC,
  changePersonalAvatarAC,
  changePersonalNameAC,
  initializeMeAC,
  setErrorMessageAC,
  setIsLoginAC,
} from 'store/actions';
import { AppThunkType } from 'types';

export const authMeTC = (): AppThunkType => async dispatch => {
  try {
    const { status, data } = await profileApi.authMe();

    if (status === statusCode.OK) {
      dispatch(authMeAC(data));
      dispatch(setIsLoginAC(true));
    }
  } catch (errorCatch) {
    const { response, message } = errorCatch as AxiosError;
    const error = response?.data.error;
    const status = response?.status;

    if (status === statusCode.Unauthorized) {
      dispatch(setErrorMessageAC(error));
    } else {
      dispatch(setErrorMessageAC(message));
    }
  } finally {
    dispatch(initializeMeAC(true));
  }
};

export const editProfileNameTC =
  (name: string): AppThunkType =>
  async dispatch => {
    try {
      const { status, data } = await profileApi.editPersonalName(name);

      if (status === statusCode.OK) {
        dispatch(changePersonalNameAC(data.updatedUser.name));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Unauthorized) {
        dispatch(setErrorMessageAC(error));
      } else {
        dispatch(setErrorMessageAC(message));
      }
    }
  };

export const editPersonalAvatarTC =
  (avatar: string): AppThunkType =>
  async dispatch => {
    try {
      const { data, status } = await profileApi.editPersonalAvatar(avatar);

      if (status === statusCode.OK) {
        dispatch(changePersonalAvatarAC(data.updatedUser.avatar));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Unauthorized) {
        dispatch(setErrorMessageAC(error));
      } else {
        dispatch(setErrorMessageAC(message));
      }
    }
  };

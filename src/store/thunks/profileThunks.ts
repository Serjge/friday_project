import { profileApi } from 'api';
import { StatusCode } from 'enum';
import {
  authMeAC,
  changePersonalAvatarAC,
  changePersonalNameAC,
  initializeMeAC,
  setErrorMessageAC,
  setIsLoginAC,
} from 'store/actions';
import { AppThunkType } from 'types';
import { handleError } from 'utils';

export const authMeTC = (): AppThunkType => async dispatch => {
  try {
    const { status, data } = await profileApi.authMe();

    if (status === StatusCode.Success) {
      dispatch(authMeAC(data));
      dispatch(setIsLoginAC(true));
    }
  } catch (e) {
    dispatch(setErrorMessageAC(null));
  } finally {
    dispatch(initializeMeAC(true));
  }
};

export const editProfileNameTC =
  (name: string): AppThunkType =>
  async dispatch => {
    try {
      const { status, data } = await profileApi.editPersonalName(name);

      if (status === StatusCode.Success) {
        dispatch(changePersonalNameAC(data.updatedUser.name));
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Unauthorized);
    }
  };

export const editPersonalAvatarTC =
  (avatar: string): AppThunkType =>
  async dispatch => {
    try {
      const { data, status } = await profileApi.editPersonalAvatar(avatar);

      if (status === StatusCode.Success) {
        dispatch(changePersonalAvatarAC(data.updatedUser.avatar));
      }
    } catch (error) {
      handleError(error, dispatch, StatusCode.Unauthorized);
    }
  };

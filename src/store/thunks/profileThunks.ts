import { profileApi } from 'api/profileApi';
import {
  AuthMeAC,
  ChangePersonalAvatarAC,
  ChangePersonalNameAC,
  initializeMe,
  setIsLoginAC,
} from 'store/actions';
import { AppThunkType } from 'types';

export const authMeTC = (): AppThunkType => dispatch =>
  profileApi
    .authMe()
    .then(res => {
      dispatch(AuthMeAC(res.data));
      dispatch(setIsLoginAC(true));
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => dispatch(initializeMe(true)));

export const editProfileNameTC =
  (name: string): AppThunkType =>
  dispatch =>
    profileApi
      .editPersonalName(name)
      .then(res => {
        dispatch(ChangePersonalNameAC(res.data.updatedUser.name));
      })
      .catch(e => {
        console.log(e);
      });

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

import { AppThunkType } from '../../types';
import {
  AuthMeAC,
  ChangePersonalAvatarAC,
  ChangePersonalNameAC,
} from '../actions/ProfileAction';

import { profileApi } from 'api/profileApi';
import { initializeMe } from 'store/actions';

export const authMeTC = (): AppThunkType => dispatch =>
  profileApi
    .authMe()
    .then(res => {
      dispatch(AuthMeAC(res.data));
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

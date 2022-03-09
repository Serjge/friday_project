import { profileApi } from '../../api/profileApi';
import { AppThunkType } from '../../types';
import { AuthMeAC, ChangePersonalInfoAC } from '../actions/ProfileAction';

export const authMeTC = (): AppThunkType => dispatch =>
  profileApi
    .authMe()
    .then(res => {
      dispatch(AuthMeAC(res.data));
    })
    .catch(e => {
      console.log(e);
    });

export const editProfileTC =
  (name: string): AppThunkType =>
  dispatch =>
    profileApi
      .editProfile(name)
      .then(res => {
        dispatch(ChangePersonalInfoAC(res.data.updatedUser.name));
      })
      .catch(e => {
        console.log(e);
      });

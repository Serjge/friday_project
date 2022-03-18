import {
  authMeAC,
  changePersonalAvatarAC,
  changePersonalNameAC,
  editProfileAC,
} from 'store/actions';

export type ProfileActionType =
  | ReturnType<typeof editProfileAC>
  | ReturnType<typeof authMeAC>
  | ReturnType<typeof changePersonalNameAC>
  | ReturnType<typeof changePersonalAvatarAC>;

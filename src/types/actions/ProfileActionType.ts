import {
  AuthMeAC,
  ChangePersonalAvatarAC,
  ChangePersonalNameAC,
  EditProfileAC,
} from 'store/actions';

export type ProfileActionType =
  | ReturnType<typeof EditProfileAC>
  | ReturnType<typeof AuthMeAC>
  | ReturnType<typeof ChangePersonalNameAC>
  | ReturnType<typeof ChangePersonalAvatarAC>;

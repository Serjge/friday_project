import { AuthMeType } from '../../types/ProfileType';

export const EditProfileAC = (needEdit: boolean) =>
  ({
    type: 'profile/change-personal-data',
    needEdit,
  } as const);
export const AuthMeAC = (state: AuthMeType) =>
  ({ type: 'profile/check-auth', state } as const);
export const ChangePersonalNameAC = (name: string) =>
  ({
    type: 'profile/change-name',
    name,
  } as const);
export const ChangePersonalAvatarAC = (avatar: string) =>
  ({
    type: 'profile/change-avatar',
    avatar,
  } as const);

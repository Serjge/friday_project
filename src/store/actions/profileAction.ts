import { AuthMeType } from 'types/ProfileType';

export const editProfileAC = (needEdit: boolean) =>
  ({
    type: 'profile/change-personal-data',
    needEdit,
  } as const);

export const authMeAC = (state: AuthMeType) =>
  ({ type: 'profile/check-auth', state } as const);

export const changePersonalNameAC = (name: string) =>
  ({
    type: 'profile/change-name',
    name,
  } as const);

export const changePersonalAvatarAC = (avatar: string) =>
  ({
    type: 'profile/change-avatar',
    avatar,
  } as const);

import { AuthMeType } from 'types/ProfileType';

export const editProfileAC = (needEdit: boolean) =>
  ({
    type: 'profile/change-personal-data',
    payload: {
      needEdit,
    },
  } as const);

export const authMeAC = (state: AuthMeType) =>
  ({
    type: 'profile/check-auth',
    payload: {
      state,
    },
  } as const);

export const changePersonalNameAC = (name: string) =>
  ({
    type: 'profile/change-name',
    payload: {
      name,
    },
  } as const);

export const changePersonalAvatarAC = (avatar: string) =>
  ({
    type: 'profile/change-avatar',
    payload: {
      avatar,
    },
  } as const);

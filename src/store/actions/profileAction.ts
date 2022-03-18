import { AuthMeType } from 'types/ProfileType';

export const CHANGE_PERSONAL_DATA = 'PROFILE/CHANGE_PERSONAL_DATA';
export const CHECK_AUTH = 'PROFILE/CHECK_AUTH';
export const CHANGE_NAME = 'PROFILE/CHANGE_NAME';
export const CHANGE_AVATAR = 'PROFILE/CHANGE_AVATAR';

export const editProfileAC = (needEdit: boolean) =>
  ({
    type: CHANGE_PERSONAL_DATA,
    payload: {
      needEdit,
    },
  } as const);

export const authMeAC = (state: AuthMeType) =>
  ({
    type: CHECK_AUTH,
    payload: {
      state,
    },
  } as const);

export const changePersonalNameAC = (name: string) =>
  ({
    type: CHANGE_NAME,
    payload: {
      name,
    },
  } as const);

export const changePersonalAvatarAC = (avatar: string) =>
  ({
    type: CHANGE_AVATAR,
    payload: {
      avatar,
    },
  } as const);

import { AuthMeType } from '../../types/ProfileType';

export const EditProfileAC = (needEdit: boolean) =>
  ({
    type: 'profile/changePersonalData',
    needEdit,
  } as const);
export const AuthMeAC = (state: AuthMeType) =>
  ({ type: 'profile/checkAuth', state } as const);

export type EditProfileActionType =
  | ReturnType<typeof EditProfileAC>
  | ReturnType<typeof AuthMeAC>;

import { LoginStateType } from '../../types';

export const EditProfileAC = (needEdit: boolean) =>
  ({
    type: 'profile/changePersonalData',
    needEdit,
  } as const);
export const AuthMeAC = (state: LoginStateType) =>
  ({ type: 'profile/checkAuth', state } as const);

export type EditProfileActionType =
  | ReturnType<typeof EditProfileAC>
  | ReturnType<typeof AuthMeAC>;

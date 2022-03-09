import { AuthMeType } from '../../types/ProfileType';

export const EditProfileAC = (needEdit: boolean) =>
  ({
    type: 'profile/change-personal-data',
    needEdit,
  } as const);
export const AuthMeAC = (state: AuthMeType) =>
  ({ type: 'profile/check-auth', state } as const);
export const ChangePersonalInfoAC = (name: string) =>
  ({
    type: 'profile/change-name',
    name,
  } as const);

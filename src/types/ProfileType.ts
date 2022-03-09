import {
  AuthMeAC,
  ChangePersonalInfoAC,
  EditProfileAC,
} from '../store/actions/ProfileAction';

export type EditProfileType = {
  updatedUser: {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
    token: string;
    tokenDeathTime: number;
    avatar: string;
  };
  token: string;
  tokenDeathTime: number;
};

export type AuthMeType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
  avatar: string;
};

export type ProfileActionType =
  | ReturnType<typeof EditProfileAC>
  | ReturnType<typeof AuthMeAC>
  | ReturnType<typeof ChangePersonalInfoAC>;

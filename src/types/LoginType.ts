export type LoginStateType = {
  _id: string;
  email: string;
  rememberMe: false;
  isAdmin: false;
  name: string;
  verified: false;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
  avatar: string;
  deviceTokens: [
    {
      _id: string;
      device: string;
      token: string;
      tokenDeathTime: number;
    },
  ];
};

export type LoginApiPayloadType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LogOutType = {
  info: string;
};

export const SET_IS_LOGIN = 'LOGIN/SET_IS_LOGIN';

export const setIsLoginAC = (isLogin: boolean) =>
  ({
    type: SET_IS_LOGIN,
    payload: {
      isLogin,
    },
  } as const);

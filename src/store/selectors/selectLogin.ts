import { RootReducerType } from 'store/store';

export const selectIsLogin = (state: RootReducerType): boolean => state.login.isLogin;

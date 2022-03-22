import { SET_IS_LOGIN, LoginActionType } from 'store/actions';

export type LoginStateWithErrorKey = {
  isLogin: boolean;
};

const initialState: LoginStateWithErrorKey = {
  isLogin: false,
};

export const loginReducer = (
  state = initialState,
  action: LoginActionType,
): LoginStateWithErrorKey => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

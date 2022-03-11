import { SET_IS_LOGIN } from 'store/actions';
import { LoginActionType } from 'types/actions';

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
      return { ...state, isLogin: action.payload.isLogin };
    default:
      return state;
  }
};

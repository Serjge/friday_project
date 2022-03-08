import { SET_ERROR, SET_LOGIN_DATA, SET_LOGOUT } from 'store/actions';
import { LoginStateType } from 'types';
import { AppActionsType } from 'types/actions';

type LoginStateWithErrorKey = LoginStateType & {
  error: string;
};

const initialState: LoginStateWithErrorKey = {
  _id: '5eecf82a3ed8f700042f1186',
  email: 'nya-admin@nya.nya',
  rememberMe: false,
  isAdmin: false,
  name: 'dfg',
  verified: false,
  publicCardPacksCount: 368,
  created: '2020-06-19T17:38:50.679Z',
  updated: '2022-03-05T13:17:59.159Z',
  __v: 0,
  token: 'ad78f960-9c86-11ec-86e1-556be06f6bb3',
  tokenDeathTime: 1646497079158,
  avatar: '',
  deviceTokens: [
    {
      _id: '60e73dbfbc460736f0302b0f',
      device: 'aedbb9f0-e016-11eb-9443-59b42c588954',
      token: 'aedb6bd0-e016-11eb-9443-59b42c588954',
      tokenDeathTime: 1625778159245,
    },
  ],
  error: '',
};

export const loginReducer = (
  state = initialState,
  action: AppActionsType,
): LoginStateWithErrorKey => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return { ...state, ...action.payload.data };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    case SET_LOGOUT:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

import { AuthMeType } from '../../types/ProfileType';
import { EditProfileActionType } from '../actions/ProfileAction';

type ProfileStateWithErrorKeyType = AuthMeType & {
  error: string;
  needEdit: boolean;
};

const initialState: ProfileStateWithErrorKeyType = {
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
  error: '',
  needEdit: false,
};

export const ProfileReducer = (
  state = initialState,
  action: EditProfileActionType,
): ProfileStateWithErrorKeyType => {
  switch (action.type) {
    case 'profile/checkAuth': {
      return { ...state, error: '', needEdit: false };
    }
    case 'profile/changePersonalData': {
      return { ...state, needEdit: action.needEdit };
    }
    default:
      return state;
  }
};

import { AuthMeType, ProfileActionType } from '../../types/ProfileType';

export type ProfileStateWithErrorKeyType = {
  profileData: AuthMeType;
  error: string;
  needEdit: boolean;
};

const initialState: ProfileStateWithErrorKeyType = {
  profileData: {} as AuthMeType,
  error: '',
  needEdit: false,
};

export const ProfileReducer = (
  state = initialState,
  action: ProfileActionType,
): ProfileStateWithErrorKeyType => {
  switch (action.type) {
    case 'profile/check-auth': {
      return { ...state, profileData: action.state };
    }
    case 'profile/change-personal-data': {
      return { ...state, needEdit: action.needEdit };
    }
    case 'profile/change-name': {
      return { ...state, profileData: { ...state.profileData, name: action.name } };
    }
    case 'profile/change-avatar': {
      return { ...state, profileData: { ...state.profileData, avatar: action.avatar } };
    }
    default:
      return state;
  }
};

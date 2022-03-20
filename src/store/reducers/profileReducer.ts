import {
  CHANGE_AVATAR,
  CHANGE_NAME,
  CHANGE_PERSONAL_DATA,
  CHECK_AUTH,
  ProfileActionType,
} from 'store/actions';
import { AuthMeType } from 'types';

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
    case CHECK_AUTH: {
      return { ...state, profileData: action.payload.state };
    }
    case CHANGE_PERSONAL_DATA: {
      return { ...state, needEdit: action.payload.needEdit };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        profileData: { ...state.profileData, name: action.payload.name },
      };
    }
    case CHANGE_AVATAR: {
      return {
        ...state,
        profileData: { ...state.profileData, avatar: action.payload.avatar },
      };
    }
    default:
      return state;
  }
};

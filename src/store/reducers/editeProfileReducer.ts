import { EditProfileActionType } from '../actions/editProfileAction';

type InitialStateType = {
  needEdit: boolean;
};

const initialState: InitialStateType = {
  needEdit: false,
};

export const editeProfileReducer = (
  state = initialState,
  action: EditProfileActionType,
): InitialStateType => {
  switch (action.type) {
    case 'profile/changePersonalData': {
      return { ...state, needEdit: action.needEdit };
    }
    default:
      return state;
  }
};

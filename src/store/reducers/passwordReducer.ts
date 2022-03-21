import { PasswordActionType } from '../../types/PasswordType';

export type IsPasswordChangeType = {
  isChange: boolean;
};

const initialState: IsPasswordChangeType = {
  isChange: false,
};

export const passwordReducer = (
  state = initialState,
  action: PasswordActionType,
): IsPasswordChangeType => {
  switch (action.type) {
    case 'IS_CHANGE_PASSWORD': {
      return { ...state, isChange: action.payload.isChange };
    }
    default:
      return state;
  }
};

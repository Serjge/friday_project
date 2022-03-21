import { IS_CHANGE_PASSWORD, PasswordActionType } from 'store/actions';

export type IsPasswordChangeType = {
  isChange: boolean;
};

const initialState: IsPasswordChangeType = {
  isChange: true,
};

export const passwordReducer = (
  state = initialState,
  action: PasswordActionType,
): IsPasswordChangeType => {
  switch (action.type) {
    case IS_CHANGE_PASSWORD: {
      return { ...state, isChange: action.payload.isChange };
    }
    default:
      return state;
  }
};

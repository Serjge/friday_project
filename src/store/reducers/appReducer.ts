import { SET_ERROR_MESSAGE } from 'store/actions';
import { AppActionsType } from 'types/actions';

type InitialStateType = {
  errorMessage: string;
};

const initialState: InitialStateType = {
  errorMessage: '',
};

export const appReducer = (
  state = initialState,
  action: AppActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload.errorMessage };
    default:
      return state;
  }
};

import { INITIALIZE_ME, SET_ERROR_MESSAGE, AppActionsType } from 'store/actions';

export type InitialStateType = {
  errorMessage: string | null;
  isInitialize: boolean;
};

const initialState: InitialStateType = {
  errorMessage: null,
  isInitialize: false,
};

export const appReducer = (
  state = initialState,
  action: AppActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload.errorMessage };
    case INITIALIZE_ME:
      return { ...state, isInitialize: action.payload.isInitialize };
    default:
      return state;
  }
};

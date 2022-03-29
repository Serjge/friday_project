import {
  AppActionsType,
  INITIALIZE_ME,
  IS_LOADING,
  SET_ERROR_MESSAGE,
} from 'store/actions';

export type InitialStateType = {
  errorMessage: string | null;
  isInitialize: boolean;
  isLoading: boolean;
};

const initialState: InitialStateType = {
  errorMessage: null,
  isInitialize: false,
  isLoading: false,
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
    case IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
};

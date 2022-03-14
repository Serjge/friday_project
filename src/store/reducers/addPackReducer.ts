import { SET_ADD_MOD, SET_RESULT_MESSAGE } from 'store/actions';
import { AddPackActionsType } from 'types/actions';

export type InitialStateType = {
  isAddMod: boolean;
  message: string;
};

const initialState: InitialStateType = {
  isAddMod: false,
  message: '',
};

export const addPackReducer = (
  state = initialState,
  action: AddPackActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_ADD_MOD:
      return { ...state, ...action.payload };
    case SET_RESULT_MESSAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

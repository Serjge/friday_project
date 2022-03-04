import { AppActionsType } from 'types/actions';

const initialState: [] = [];

export const appReducer = (state = initialState, action: AppActionsType): [] => {
  switch (action.type) {
    case 'example':
      return state;
    default:
      return state;
  }
};

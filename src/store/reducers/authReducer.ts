import { AllAppActionsType } from 'types/actions';

const initialState: [] = [];

export const authReducer = (state = initialState, action: AllAppActionsType): [] => {
  switch (action.type) {
    case 'example':
      return state;
    default:
      return state;
  }
};

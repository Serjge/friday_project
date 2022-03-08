import { AllAppActionsType } from 'types/actions';

const initialState: [] = [];

export const exampleReducer = (state = initialState, action: AllAppActionsType): [] => {
  switch (action.type) {
    case 'example':
      return state;
    default:
      return state;
  }
};

import { CardsType } from 'types';
import { CardsActionType } from 'types/actions';

export type InitialStateType = {
  packs: CardsType;
  sort: string;
  searchAnswer: string;
  searchQuestion: string;
};

const initialState: InitialStateType = {
  packs: {} as CardsType,
  sort: '',
  searchAnswer: '',
  searchQuestion: '',
};

export const cardReducer = (
  state = initialState,
  action: CardsActionType,
): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

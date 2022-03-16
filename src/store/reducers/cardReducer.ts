import { CardsType } from 'types';
import { CardActionType } from 'types/actions';

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
  action: CardActionType,
): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

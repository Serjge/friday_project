import { SET_CARDS, SET_SORT } from 'store/actions';
import { CardsPackType } from 'types';
import { CardsActionType } from 'types/actions';

export type InitialStateType = {
  packs: CardsPackType;
  sort: string;
};

const initialState: InitialStateType = {
  packs: {} as CardsPackType,
  sort: '',
};

export const cardsReducer = (
  state = initialState,
  action: CardsActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, packs: action.payload.cards };
    case SET_SORT:
      return { ...state, sort: action.payload.sort };
    default:
      return state;
  }
};

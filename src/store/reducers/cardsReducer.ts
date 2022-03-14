import { SET_CARDS, SET_SEARCH_PACK, SET_SORT } from 'store/actions';
import { CardsPackType } from 'types';
import { CardsActionType } from 'types/actions';

export type InitialStateType = {
  packs: CardsPackType;
  sort: string;
  searchPack: string;
};

const initialState: InitialStateType = {
  packs: {} as CardsPackType,
  sort: '',
  searchPack: '',
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
    case SET_SEARCH_PACK:
      return { ...state, searchPack: action.payload.searchValue };
    default:
      return state;
  }
};

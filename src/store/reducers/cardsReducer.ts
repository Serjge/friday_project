import { SET_CARDS, SET_SEARCH_PACK, SET_SORT } from 'store/actions';
import { SET_CURRENT_PAGE, SET_PAGE_COUNT } from 'store/actions/cardsAction';
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
    case SET_CURRENT_PAGE:
      return { ...state, packs: { ...state.packs, page: action.payload.currentPage } };
    case SET_PAGE_COUNT:
      return {
        ...state,
        packs: { ...state.packs, pageCount: action.payload.pageCount },
      };
    default:
      return state;
  }
};

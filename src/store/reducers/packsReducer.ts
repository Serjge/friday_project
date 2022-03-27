import {
  PacksActionType,
  RERENDER_PACK,
  SET_CURRENT_PAGE_PACKS,
  SET_IS_MY_PACK,
  SET_LOCAL_MAX_CARDS_COUNT,
  SET_LOCAL_MIN_CARDS_COUNT,
  SET_MAX_CARDS_COUNT,
  SET_MIN_CARDS_COUNT,
  SET_PACKS,
  SET_PAGE_COUNT_PACKS,
  SET_RESULT_MESSAGE,
  SET_SEARCH_PACK,
  SET_SORT_PACKS,
} from 'store/actions';
import { PacksType, PackType } from 'types';

export type InitialStateType = {
  packs: PacksType;
  sort: string;
  searchPack: string;
  isMyPack: boolean;
  rerenderFlag: string[]; // for delete
  localMinRage: number;
  localMaxRage: number;
  resultMessageAddPack: string;
};

const initialState: InitialStateType = {
  packs: {
    minCardsCount: 0,
    maxCardsCount: 30,
    pageCount: 5,
    page: 1,
    cardPacks: [] as PackType[],
  } as PacksType,
  sort: '',
  searchPack: '',
  isMyPack: false,
  rerenderFlag: ['rerender'],
  localMinRage: 0,
  localMaxRage: 30,
  resultMessageAddPack: '',
};

export const packsReducer = (
  state = initialState,
  action: PacksActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_PACKS:
      return {
        ...state,
        packs: action.payload.cards,
      };
    case SET_SORT_PACKS:
      return { ...state, sort: action.payload.sort };
    case SET_SEARCH_PACK:
      return { ...state, searchPack: action.payload.searchValue };
    case SET_CURRENT_PAGE_PACKS:
      return { ...state, packs: { ...state.packs, page: action.payload.currentPage } };
    case SET_PAGE_COUNT_PACKS:
      return {
        ...state,
        packs: { ...state.packs, pageCount: action.payload.pageCount },
      };
    case SET_IS_MY_PACK:
      return { ...state, isMyPack: action.payload.isMyPack };
    case RERENDER_PACK:
      return { ...state, rerenderFlag: { ...state.rerenderFlag } };
    case SET_MIN_CARDS_COUNT:
      return {
        ...state,
        packs: { ...state.packs, minCardsCount: action.payload.minCards },
      };
    case SET_MAX_CARDS_COUNT:
      return {
        ...state,
        packs: { ...state.packs, maxCardsCount: action.payload.maxCards },
      };
    case SET_LOCAL_MIN_CARDS_COUNT:
      return {
        ...state,
        localMinRage: action.payload.minCards,
      };
    case SET_LOCAL_MAX_CARDS_COUNT:
      return {
        ...state,
        localMaxRage: action.payload.maxCards,
      };
    case SET_RESULT_MESSAGE:
      return { ...state, resultMessageAddPack: action.payload.message };
    default:
      return state;
  }
};

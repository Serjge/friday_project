import {

  RERENDER_PACK,
  SET_CURRENT_PAGE_PACKS,

  SET_PACKS,

  SET_SEARCH_PACK,
  SET_SORT_PACKS,

  SET_PAGE_COUNT_PACKS,
  PacksActionType,
  SET_IS_MY_PACK,
} from 'store/actions';
import { PacksType } from 'types';

export type InitialStateType = {
  packs: PacksType;
  sort: string;
  searchPack: string;
  isMyPack: boolean;
  flagForRerender: string[]; // for delete
};

const initialState: InitialStateType = {
  packs: {} as PacksType,
  sort: '',
  searchPack: '',
  isMyPack: false,
  flagForRerender: ['rerender'],
};

export const packsReducer = (
  state = initialState,
  action: PacksActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_PACKS:
      return { ...state, packs: action.payload.cards };
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
      return { ...state, flagForRerender: { ...state.flagForRerender } };
    default:
      return state;
  }
};

import { PacksType } from 'types';

export const SET_PACKS = 'PACKS/SET_PACKS';
export const SET_SORT_PACKS = 'PACKS/SET_SORT_PACKS';
export const SET_SEARCH_PACK = 'PACKS/SET_SEARCH_PACK';
export const SET_CURRENT_PAGE_PACKS = 'PACKS/SET_CURRENT_PAGE_PACKS';
export const SET_PAGE_COUNT_PACKS = 'PACKS/SET_PAGE_COUNT_PACKS';
export const SET_IS_MY_PACK = 'PACKS/SET_IS_MY_PACK';
export const RERENDER_PACK = 'PACKS/RERENDER_PACK';
export const SET_MIN_CARDS_COUNT = 'PACKS/SET_MIN_CARDS_COUNT';
export const SET_MAX_CARDS_COUNT = 'PACKS/SET_MAX_CARDS_COUNT';
export const SET_LOCAL_MIN_CARDS_COUNT = 'PACKS/SET_LOCAL_MIN_CARDS_COUNT';
export const SET_LOCAL_MAX_CARDS_COUNT = 'PACKS/SET_LOCAL_MAX_CARDS_COUNT';
export const SET_RESULT_MESSAGE = 'PACKS/SET_RESULT_MESSAGE';

export const setPacksAC = (cards: PacksType) =>
  ({
    type: SET_PACKS,
    payload: {
      cards,
    },
  } as const);

export const setSortPacksAC = (sort: string) =>
  ({
    type: SET_SORT_PACKS,
    payload: {
      sort,
    },
  } as const);

export const setSearchPackAC = (searchValue: string) =>
  ({
    type: SET_SEARCH_PACK,
    payload: {
      searchValue,
    },
  } as const);

export const setCurrentPagePacksAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE_PACKS,
    payload: {
      page: currentPage,
    },
  } as const);

export const setPageCountPacksAC = (pageCount: number) =>
  ({
    type: SET_PAGE_COUNT_PACKS,
    payload: {
      pageCount,
    },
  } as const);

export const setIsMyPackAC = (isMyPack: boolean) =>
  ({
    type: SET_IS_MY_PACK,
    payload: {
      isMyPack,
    },
  } as const);

export const rerenderPackAC = () =>
  ({
    type: RERENDER_PACK,
  } as const);

export const setMinCardsCountAC = (minCards: number) =>
  ({
    type: SET_MIN_CARDS_COUNT,
    payload: {
      minCards,
    },
  } as const);

export const setMaxCardsCountAC = (maxCards: number) =>
  ({
    type: SET_MAX_CARDS_COUNT,
    payload: {
      maxCards,
    },
  } as const);

export const setLocalMinCardsCountAC = (minCards: number) =>
  ({
    type: SET_LOCAL_MIN_CARDS_COUNT,
    payload: {
      minCards,
    },
  } as const);

export const setLocalMaxCardsCountAC = (maxCards: number) =>
  ({
    type: SET_LOCAL_MAX_CARDS_COUNT,
    payload: {
      maxCards,
    },
  } as const);

export const setResultMessageAddPackAC = (message: string) =>
  ({
    type: SET_RESULT_MESSAGE,
    payload: {
      message,
    },
  } as const);

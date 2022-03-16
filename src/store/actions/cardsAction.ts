import { CardsPackType } from 'types';

export const SET_CARDS = 'CARDS/SET_CARDS';
export const SET_SORT = 'CARDS/SET_SORT';
export const SET_SEARCH_PACK = 'CARDS/SET_SEARCH_PACK';
export const SET_CURRENT_PAGE = 'CARDS/SET_CURRENT_PAGE';
export const SET_PAGE_COUNT = 'CARDS/SET_PAGE_COUNT';

export const setCards = (cards: CardsPackType) =>
  ({
    type: SET_CARDS,
    payload: {
      cards,
    },
  } as const);

export const setSort = (sort: string) =>
  ({
    type: SET_SORT,
    payload: {
      sort,
    },
  } as const);

export const setSearchPack = (searchValue: string) =>
  ({
    type: SET_SEARCH_PACK,
    payload: {
      searchValue,
    },
  } as const);

export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  } as const);

export const setPageCountAC = (pageCount: number) =>
  ({
    type: SET_PAGE_COUNT,
    payload: {
      pageCount,
    },
  } as const);

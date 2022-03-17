import { PacksType } from 'types';

export const SET_PACKS = 'PACKS/SET_PACKS';
export const SET_SORT_PACKS = 'PACKS/SET_SORT_PACKS';
export const SET_SEARCH_PACK = 'PACKS/SET_SEARCH_PACK';
export const SET_CURRENT_PAGE_PACKS = 'PACKS/SET_CURRENT_PAGE_PACKS';
export const SET_PAGE_COUNT_PACKS = 'PACKS/SET_PAGE_COUNT_PACKS';
export const SET_IS_MY_PACK = 'PACKS/SET_IS_MY_PACK';

export const setPacks = (cards: PacksType) =>
  ({
    type: SET_PACKS,
    payload: {
      cards,
    },
  } as const);

export const setSortPacks = (sort: string) =>
  ({
    type: SET_SORT_PACKS,
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

export const setCurrentPagePacksAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE_PACKS,
    payload: {
      currentPage,
    },
  } as const);

export const setPageCountPacksAC = (pageCount: number) =>
  ({
    type: SET_PAGE_COUNT_PACKS,
    payload: {
      pageCount,
    },
  } as const);

export const setIsMyPack = (isMyPack: boolean) =>
  ({
    type: SET_IS_MY_PACK,
    payload: {
      isMyPack,
    },
  } as const);

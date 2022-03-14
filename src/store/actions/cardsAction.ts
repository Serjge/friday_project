import { CardsPackType } from 'types';

export const SET_CARDS = 'CARDS/SET_CARDS';
export const SET_SORT = 'CARDS/SET_SORT';
export const SET_SEARCH_PACK = 'CARDS/SET_SEARCH_PACK';

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

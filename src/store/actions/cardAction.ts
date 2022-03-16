import { CardsType } from 'types';

export const SET_CARD = 'CARD/SET_CARD';
export const SET_SORT_CARD = 'CARD/SET_SORT_CARD';
export const SET_SEARCH_QUESTION = 'CARD/SET_SEARCH_QUESTION';
export const SET_SEARCH_ANSWER = 'CARD/SET_SEARCH_ANSWER';

export const setCard = (card: CardsType) =>
  ({
    type: SET_CARD,
    card,
  } as const);

export const setSortCard = (sort: string) =>
  ({
    type: SET_SORT_CARD,
    sort,
  } as const);

export const setSearchQuestion = (searchValue: string) =>
  ({
    type: SET_SEARCH_QUESTION,
    searchValue,
  } as const);

export const setSearchAnswer = (searchValue: string) =>
  ({
    type: SET_SEARCH_ANSWER,
    searchValue,
  } as const);

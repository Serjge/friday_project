import { CardsType } from 'types';

export const SET_CARDS = 'CARDS/SET_CARDS';
export const SET_SORT_CARDS = 'CARDS/SET_SORT_CARDS';
export const SET_SEARCH_QUESTION_CARDS = 'CARDS/SET_SEARCH_QUESTION_CARDS';
export const SET_SEARCH_ANSWER_CARDS = 'CARDS/SET_SEARCH_ANSWER_CARDS';
export const RERENDER_CARD = 'CARDS/RERENDER_CARD';

export const setCards = (cards: CardsType) =>
  ({
    type: SET_CARDS,
    payload: {
      cards,
    },
  } as const);

export const setSortCards = (sort: string) =>
  ({
    type: SET_SORT_CARDS,
    payload: {
      sort,
    },
  } as const);

export const setSearchQuestionCards = (searchValue: string) =>
  ({
    type: SET_SEARCH_QUESTION_CARDS,
    payload: {
      searchValue,
    },
  } as const);

export const setSearchAnswerCards = (searchValue: string) =>
  ({
    type: SET_SEARCH_ANSWER_CARDS,
    payload: {
      searchValue,
    },
  } as const);

export const rerenderCardAC = () =>
  ({
    type: RERENDER_CARD,
  } as const);

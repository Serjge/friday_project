import { CardsType } from 'types';

export const SET_CARDS = 'CARDS/SET_CARDS';
export const RERENDER_CARD = 'CARDS/RERENDER_CARD';
export const SET_SORT_CARDS = 'CARDS/SET_SORT_CARDS';
export const SET_PAGE_COUNT_CARDS = 'CARDS/SET_PAGE_COUNT_CARDS';
export const SET_CURRENT_PAGE_CARDS = 'CARDS/SET_CURRENT_PAGE_CARDS';
export const SET_SEARCH_ANSWER_CARDS = 'CARDS/SET_SEARCH_ANSWER_CARDS';
export const SET_SEARCH_QUESTION_CARDS = 'CARDS/SET_SEARCH_QUESTION_CARDS';

export const setCardsAC = (cards: CardsType) =>
  ({
    type: SET_CARDS,
    payload: {
      cards,
    },
  } as const);

export const setSortCardsAC = (sort: string) =>
  ({
    type: SET_SORT_CARDS,
    payload: {
      sort,
    },
  } as const);

export const setSearchQuestionCardsAC = (searchQuestion: string) =>
  ({
    type: SET_SEARCH_QUESTION_CARDS,
    payload: {
      searchQuestion,
    },
  } as const);

export const setSearchAnswerCardsAC = (searchAnswer: string) =>
  ({
    type: SET_SEARCH_ANSWER_CARDS,
    payload: {
      searchAnswer,
    },
  } as const);

export const rerenderCardAC = () =>
  ({
    type: RERENDER_CARD,
  } as const);

export const setCurrentPageCardsAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE_CARDS,
    payload: {
      page: currentPage,
    },
  } as const);

export const setPageCountCardsAC = (pageCount: number) =>
  ({
    type: SET_PAGE_COUNT_CARDS,
    payload: {
      pageCount,
    },
  } as const);

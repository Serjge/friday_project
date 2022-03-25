import { RootReducerType } from 'store';
import { CardType } from 'types';

const ZERO_ELEMENT = 0;

export const selectPackCards = (state: RootReducerType): CardType[] =>
  state.cards.pack.cards;

export const selectSortCard = (state: RootReducerType): string => state.cards.sort;

export const selectSearchQuestion = (state: RootReducerType): string =>
  state.cards.searchQuestion;

export const selectSearchAnswer = (state: RootReducerType): string =>
  state.cards.searchAnswer;

export const selectRerenderCards = (state: RootReducerType): string[] =>
  state.cards.rerenderFlag;

export const selectPageCountCards = (state: RootReducerType): number =>
  state.cards.pack.pageCount;

export const selectCurrentPageCards = (state: RootReducerType): number =>
  state.cards.pack.page;

export const selectTotalCountCards = (state: RootReducerType): number =>
  state.cards.pack.cardsTotalCount;

export const selectPackUserId = (state: RootReducerType): string =>
  state.cards.pack.packUserId;

export const selectCard = (state: RootReducerType, cardId: string): CardType =>
  state.cards.pack.cards.filter(({ _id }) => _id === cardId)[ZERO_ELEMENT];

export const selectQuestion = (state: RootReducerType, cardId: string): string =>
  selectCard(state, cardId).question;

export const selectAnswer = (state: RootReducerType, cardId: string): string =>
  selectCard(state, cardId).answer;

export const selectUpdateCard = (state: RootReducerType, cardId: string): string =>
  selectCard(state, cardId).updated;

export const selectGradeCard = (state: RootReducerType, cardId: string): number =>
  selectCard(state, cardId).grade;

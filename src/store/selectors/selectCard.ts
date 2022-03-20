import { RootReducerType } from 'store';
import { CardType } from 'types';

const zeroElement = 0;

export const selectPackCards = (state: RootReducerType): CardType[] =>
  state.cards.pack.cards;

export const selectSortCard = (state: RootReducerType): string => state.cards.sort;

export const selectSearchQuestion = (state: RootReducerType): string =>
  state.cards.searchQuestion;

export const selectSearchAnswer = (state: RootReducerType): string =>
  state.cards.searchAnswer;

export const selectRerenderCards = (state: RootReducerType): string[] =>
  state.cards.flagForRerender;

export const selectPackUserId = (state: RootReducerType): string =>
  state.cards.pack.packUserId;

export const selectQuestion = (state: RootReducerType, cardId: string): string =>
  state.cards.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].question;

export const selectAnswer = (state: RootReducerType, cardId: string): string =>
  state.cards.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].answer;

export const selectUpdateCard = (state: RootReducerType, cardId: string): string =>
  state.cards.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].updated;

export const selectGradeCard = (state: RootReducerType, cardId: string): number =>
  state.cards.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].grade;

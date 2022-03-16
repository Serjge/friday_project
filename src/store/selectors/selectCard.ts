import { RootReducerType } from 'store';
import { NewCardType } from 'types';

const zeroElement = 0;

export const selectPackCards = (state: RootReducerType): NewCardType[] =>
  state.card.pack.cards;

export const selectSortCard = (state: RootReducerType): string => state.card.sort;

export const selectSearchQuestion = (state: RootReducerType): string =>
  state.card.searchQuestion;

export const selectSearchAnswer = (state: RootReducerType): string =>
  state.card.searchAnswer;

export const selectQuestion = (state: RootReducerType, cardId: string): string =>
  state.card.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].question;

export const selectAnswer = (state: RootReducerType, cardId: string): string =>
  state.card.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].answer;

export const selectUpdateCard = (state: RootReducerType, cardId: string): string =>
  state.card.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].updated;

export const selectGradeCard = (state: RootReducerType, cardId: string): number =>
  state.card.pack.cards.filter(({ _id }) => _id === cardId)[zeroElement].grade;

import { RootReducerType } from 'store/store';
import { CardType } from 'types';

const ZERO_ELEMENT = 0;
export const SelectCard = (state: RootReducerType, cardId: string): CardType =>
  state.cards.pack.cards.filter(({ _id }) => _id === cardId)[ZERO_ELEMENT];

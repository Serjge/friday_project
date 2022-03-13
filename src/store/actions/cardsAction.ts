import { CardType } from 'types';

export const SET_CARDS = 'CARDS/SET_CARDS';

export const setCards = (cards: CardType[]) =>
  ({
    type: SET_CARDS,
    payload: {
      cards,
    },
  } as const);

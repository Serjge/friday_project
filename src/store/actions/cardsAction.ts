import { CardsPackType } from 'types';

export const SET_CARDS = 'CARDS/SET_CARDS';

export const setCards = (cards: CardsPackType) =>
  ({
    type: SET_CARDS,
    payload: {
      cards,
    },
  } as const);

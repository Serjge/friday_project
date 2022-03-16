/* eslint-disable @typescript-eslint/no-magic-numbers */
import { instance } from 'api';
import { CardsType } from 'types';

export const cardsApi = {
  getCards(
    cardsPackId: string = '',
    cardAnswer: string = '',
    cardQuestion: string = '',
    min: number = 0,
    max: number = 0,
    sortCards: string = '',
    pageCount: number = 0,
    page: number = 0,
  ) {
    return instance.get<CardsType>('/cards/card', {
      params: {
        cardAnswer,
        cardQuestion,
        cardsPack_id: cardsPackId,
        min,
        max,
        sortCards,
        pageCount,
        page,
      },
    });
  },
};

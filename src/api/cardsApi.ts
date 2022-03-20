/* eslint-disable @typescript-eslint/no-magic-numbers */
import { instance } from 'api';
import { AddCardType, CardsType } from 'types';

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
  addCard(cardsPackId: string, question = 'New', answer = 'new') {
    return instance.post('/cards/card', {
      card: { cardsPack_id: cardsPackId, question, answer },
    });
  },
  deleteCard(cardId: string) {
    return instance.delete('/cards/card', { params: { id: cardId } });
  },
  updateCard(cardId: string, card: Partial<Omit<AddCardType, 'cardsPackId'>>) {
    return instance.put('/cards/card', { card: { cardsPack_id: cardId, ...card } });
  },
};

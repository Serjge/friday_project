/* eslint-disable @typescript-eslint/no-magic-numbers */
import { instance } from 'api';
import { PATHS_API } from 'enum';
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
    return instance.get<CardsType>(PATHS_API.Cards_card, {
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
    return instance.post(PATHS_API.Cards_card, {
      card: { cardsPack_id: cardsPackId, question, answer },
    });
  },
  deleteCard(cardId: string) {
    return instance.delete(PATHS_API.Cards_card, { params: { id: cardId } });
  },
  updateCard(cardId: string, card: Partial<Omit<AddCardType, 'cardsPackId'>>) {
    return instance.put(PATHS_API.Cards_card, {
      card: { cardsPack_id: cardId, ...card },
    });
  },
  setGrade(data: { grade: number; card_id: string }) {
    return instance.put(PATHS_API.Cards_grade, data);
  },
};

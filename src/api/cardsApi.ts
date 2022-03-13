import { instance } from 'api';
import { CardType } from 'types';

export const cardsApi = {
  getCards() {
    return instance.get<{ cardsPack: CardType[] }>('/cards/pack');
  },
};

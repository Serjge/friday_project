import { instance } from 'api';
import { CardsPackType } from 'types';

export const cardsApi = {
  getCards() {
    return instance.get<CardsPackType>('/cards/pack');
  },
};

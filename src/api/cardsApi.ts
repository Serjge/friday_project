/* eslint-disable @typescript-eslint/no-magic-numbers */
import { instance } from 'api';
import { CardsPackType } from 'types';

export const cardsApi = {
  getCards2() {
    return instance.get<CardsPackType>('/cards/pack');
  },
  getCards(
    packName: string = '',
    min: number = 0,
    max: number = 0,
    sortPacks: string = '',
    pageCount: number = 0,
    page: number = 0,
    userId: string = '',
  ) {
    return instance.get<CardsPackType>('/cards/pack', {
      params: {
        packName,
        min,
        max,
        sortPacks,
        pageCount,
        page,
        user_id: userId,
      },
    });
  },
};

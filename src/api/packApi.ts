/* eslint-disable @typescript-eslint/no-magic-numbers */
import { instance } from 'api/instance';
import { CardsPackType } from 'types';

// type AddPackPayload = {
//   name?: string;
//   deckCover?: string;
//   private?: boolean;
// };

export const packApi = {
  set(newTitle: string) {
    return instance.post('/cards/pack', { cardsPack: { name: newTitle } });
  },
  getPacks(
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

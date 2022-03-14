import { instance } from 'api/instance';

// type AddPackPayload = {
//   name?: string;
//   deckCover?: string;
//   private?: boolean;
// };

export const addPackApi = {
  set() {
    return instance.post('/cards/pack', { cardsPack: {} });
  },
};

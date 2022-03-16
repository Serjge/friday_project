import { instance } from 'api/instance';

// type AddPackPayload = {
//   name?: string;
//   deckCover?: string;
//   private?: boolean;
// };

export const addPackApi = {
  set(newTitle: string) {
    return instance.post('/cards/pack', { cardsPack: { name: newTitle } });
  },
};

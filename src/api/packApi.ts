import { instance } from 'api/instance';
import { PATHS_API } from 'enum';
import { PacksType } from 'types';

export const packApi = {
  getPacks(
    packName: string,
    min: number,
    max: number,
    sortPacks: string,
    pageCount: number,
    page: number,
    userId: string,
  ) {
    return instance.get<PacksType>('/cards/pack', {
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
  setNewPack(newTitle: string) {
    return instance.post(PATHS_API.Cards_pack, { cardsPack: { name: newTitle } });
  },
  editTitlePack(id: string, newTitle: string) {
    return instance.put(PATHS_API.Cards_pack, { cardsPack: { _id: id, name: newTitle } });
  },
  deletePack(id: string) {
    return instance.delete(PATHS_API.Cards_pack, {
      params: {
        id,
      },
    });
  },
};

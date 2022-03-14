import { instance } from 'api/instance';

type PaginationAPIPayload = {
  packName: string; // ?packName=english // не обязательно
  maxCardsCount: number;
  minCardsCount: number;
  pageCount: number;
  page: number; // current page
  sortPacks: string; // 0updated
  user_id: string;
};

export const paginationAPI = {
  login(data: PaginationAPIPayload) {
    return instance.get('/cards/pack');
  },
};

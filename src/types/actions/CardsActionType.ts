import { setCards, setSearchPack, setSort } from 'store/actions';
import { setCurrentPageAC, setPageCountAC } from 'store/actions/cardsAction';

export type SetCardsType = ReturnType<typeof setCards>;
export type SetSortType = ReturnType<typeof setSort>;
export type SetSearchPack = ReturnType<typeof setSearchPack>;
export type SetPagesCount = ReturnType<typeof setPageCountAC>;
export type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>;

export type CardsActionType =
  | SetCardsType
  | SetSearchPack
  | SetSortType
  | SetPagesCount
  | SetCurrentPageAC;

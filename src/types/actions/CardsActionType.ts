import { setCards, setSearchPack, setSort } from 'store/actions';

export type SetCardsType = ReturnType<typeof setCards>;
export type SetSortType = ReturnType<typeof setSort>;
export type SetSearchPack = ReturnType<typeof setSearchPack>;

export type CardsActionType = SetCardsType | SetSearchPack | SetSortType;

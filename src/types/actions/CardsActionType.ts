import { setCards, setSort } from 'store/actions';

export type SetCardsType = ReturnType<typeof setCards>;
export type SetSortType = ReturnType<typeof setSort>;

export type CardsActionType = SetCardsType | SetSortType;

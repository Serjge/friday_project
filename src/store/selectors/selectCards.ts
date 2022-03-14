import { RootReducerType } from 'store/store';
import { CardType } from 'types';

const zeroElement = 0;

export const selectCards = (state: RootReducerType): CardType[] =>
  state.cards.packs.cardPacks;

export const selectPacks = (state: RootReducerType, cardId: string): CardType =>
  state.cards.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement];

export const selectPackName = (state: RootReducerType, cardId: string): string =>
  state.cards.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].name;

export const selectUpdateDataPack = (state: RootReducerType, cardId: string): string =>
  state.cards.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].updated;

export const selectCardsCount = (state: RootReducerType, cardId: string): number =>
  state.cards.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].cardsCount;

export const selectUserNamePack = (state: RootReducerType, cardId: string): string =>
  state.cards.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].user_name;

export const selectUserIdPack = (state: RootReducerType, cardId: string): string =>
  state.cards.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].user_id;

export const selectSortPacks = (state: RootReducerType): string => state.cards.sort;

export const selectSearchPack = (state: RootReducerType): string =>
  state.cards.searchPack;
// for pagination
export const selectCurrentPage = (state: RootReducerType): number =>
  state.cards.packs.page;

export const selectPageCount = (state: RootReducerType): number =>
  state.cards.packs.pageCount;

export const selectCardPacksTotalCount = (state: RootReducerType): number =>
  state.cards.packs.cardPacksTotalCount;

export const selectMinCardsCount = (state: RootReducerType): number =>
  state.cards.packs.minCardsCount;

export const selectMaxCardsCount = (state: RootReducerType): number =>
  state.cards.packs.maxCardsCount;



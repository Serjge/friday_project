import { RootReducerType } from 'store/store';
import { PackType } from 'types';

const zeroElement = 0;

export const selectPacks = (state: RootReducerType): PackType[] =>
  state.packs.packs.cardPacks;

export const selectIsMyPack = (state: RootReducerType): boolean => state.packs.isMyPack;

export const selectPack = (state: RootReducerType, cardId: string): PackType =>
  state.packs.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement];

export const selectPackName = (state: RootReducerType, cardId: string): string =>
  state.packs.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].name;

export const selectUpdateDataPack = (state: RootReducerType, cardId: string): string =>
  state.packs.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].updated;

export const selectCardsCount = (state: RootReducerType, cardId: string): number =>
  state.packs.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].cardsCount;

export const selectUserNamePack = (state: RootReducerType, cardId: string): string =>
  state.packs.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].user_name;

export const selectUserIdPack = (state: RootReducerType, cardId: string): string =>
  state.packs.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement].user_id;

export const selectPackId = (state: RootReducerType, cardId: string): string =>
  // eslint-disable-next-line no-underscore-dangle
  state.packs.packs.cardPacks.filter(({ _id }) => _id === cardId)[zeroElement]._id;

export const selectSortPacks = (state: RootReducerType): string => state.packs.sort;

export const selectSearchPack = (state: RootReducerType): string =>
  state.packs.searchPack;

// for pagination
export const selectCurrentPage = (state: RootReducerType): number =>
  state.packs.packs.page;

export const selectPageCount = (state: RootReducerType): number =>
  state.packs.packs.pageCount;

export const selectCardPacksTotalCount = (state: RootReducerType): number =>
  state.packs.packs.cardPacksTotalCount;

export const selectMinCardsCount = (state: RootReducerType): number =>
  state.packs.packs.minCardsCount;

export const selectMaxCardsCount = (state: RootReducerType): number =>
  state.packs.packs.maxCardsCount;

// delete
export const selectRerender = (state: RootReducerType): string[] =>
  state.packs.flagForRerender;

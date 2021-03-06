import { RootReducerType } from 'store/store';
import { PackType } from 'types';

const ZERO_ELEMENT = 0;

export const selectPacks = (state: RootReducerType): PackType[] =>
  state.packs.packs.cardPacks;

export const selectIsMyPack = (state: RootReducerType): boolean => state.packs.isMyPack;

export const selectPack = (state: RootReducerType, packId: string): PackType =>
  state.packs.packs.cardPacks.filter(({ _id }) => _id === packId)[ZERO_ELEMENT];

export const selectPackName = (state: RootReducerType, packId: string): string =>
  selectPack(state, packId).name;

export const selectUpdateDataPack = (state: RootReducerType, packId: string): string =>
  selectPack(state, packId).updated;

export const selectCardsCount = (state: RootReducerType, packId: string): number =>
  selectPack(state, packId).cardsCount;

export const selectUserNamePack = (state: RootReducerType, packId: string): string =>
  selectPack(state, packId).user_name;

export const selectUserIdPack = (state: RootReducerType, packId: string): string =>
  selectPack(state, packId).user_id;

export const selectPackId = (state: RootReducerType, packId: string): string =>
  // eslint-disable-next-line no-underscore-dangle
  selectPack(state, packId)._id;

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

// for range
export const selectMinCardsCount = (state: RootReducerType): number =>
  state.packs.packs.minCardsCount;

export const selectMaxCardsCount = (state: RootReducerType): number =>
  state.packs.packs.maxCardsCount;

export const selectLocalMinCardsCount = (state: RootReducerType): number =>
  state.packs.localMinRage;

export const selectLocalMaxCardsCount = (state: RootReducerType): number =>
  state.packs.localMaxRage;

// delete
export const selectRerender = (state: RootReducerType): string[] =>
  state.packs.rerenderFlag;

// add pack result Message
export const selectResultMessage = (state: RootReducerType): string =>
  state.packs.resultMessageAddPack;

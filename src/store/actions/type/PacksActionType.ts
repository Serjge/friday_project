import {
  setPacksAC,
  setSearchPackAC,
  setSortPacksAC,
  setCurrentPagePacksAC,
  setPageCountPacksAC,
  setIsMyPackAC,
  rerenderPackAC,
  setLocalMaxCardsCountAC,
  setLocalMinCardsCountAC,
  setMaxCardsCountAC,
  setMinCardsCountAC,
  setResultMessageAddPackAC,
} from 'store/actions';

export type SetPacksType = ReturnType<typeof setPacksAC>;
export type SetSortPacksType = ReturnType<typeof setSortPacksAC>;
export type SetSearchPack = ReturnType<typeof setSearchPackAC>;
export type SetPagesCountPacks = ReturnType<typeof setPageCountPacksAC>;
export type SetCurrentPagePacksType = ReturnType<typeof setCurrentPagePacksAC>;
export type SetIsMyPackType = ReturnType<typeof setIsMyPackAC>;
export type RerenderPackType = ReturnType<typeof rerenderPackAC>;

export type PacksActionType =
  | SetPacksType
  | SetSearchPack
  | SetSortPacksType
  | SetPagesCountPacks
  | SetCurrentPagePacksType
  | SetIsMyPackType
  | RerenderPackType
  | ReturnType<typeof setMaxCardsCountAC>
  | ReturnType<typeof setMinCardsCountAC>
  | ReturnType<typeof setLocalMinCardsCountAC>
  | ReturnType<typeof setLocalMaxCardsCountAC>
  | ReturnType<typeof setResultMessageAddPackAC>;

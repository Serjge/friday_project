import { RootReducerType } from 'store';

export const selectIsAddMod = (state: RootReducerType): boolean => state.addPack.isAddMod;

export const selectResultMessage = (state: RootReducerType): string =>
  state.addPack.message;

import { RootReducerType } from 'store';

export const selectErrorMessage = (state: RootReducerType): string =>
  state.app.errorMessage;

export const selectIsInitialize = (state: RootReducerType): boolean =>
  state.app.isInitialize;

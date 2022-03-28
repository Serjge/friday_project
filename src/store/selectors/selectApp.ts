import { RootReducerType } from 'store';

export const selectErrorMessage = (state: RootReducerType): string | null =>
  state.app.errorMessage;

export const selectIsInitialize = (state: RootReducerType): boolean =>
  state.app.isInitialize;

export const selectIsLoading = (state: RootReducerType): boolean => state.app.isLoading;

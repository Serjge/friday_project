import { RootReducerType } from 'store';

export const selectErrorMessage = (state: RootReducerType): string =>
  state.app.errorMessage;

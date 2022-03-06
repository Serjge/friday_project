import { RootReducerType } from 'store';
import { StatusType } from 'types';

export const selectStatus = (state: RootReducerType): StatusType =>
  state.registration.status;
export const selectError = (state: RootReducerType): string => state.registration.error;
export const selectIsCompleted = (state: RootReducerType): boolean =>
  state.registration.IsCompleted;

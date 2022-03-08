import { RootReducerType } from 'store';
import { StatusType } from 'types';

export const selectStatus = (state: RootReducerType): StatusType =>
  state.registration.status;
export const selectRegistrationIsCompleted = (state: RootReducerType): boolean =>
  state.registration.isCompleted;

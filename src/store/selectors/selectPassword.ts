import { RootReducerType } from '../store';

export const selectPassword = (state: RootReducerType): boolean =>
  state.password.isChange;

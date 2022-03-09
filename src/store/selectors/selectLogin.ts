import { RootReducerType } from 'store/store';
import { NullAnd } from 'types';

export const selectLoginToken = (state: RootReducerType): NullAnd<string> =>
  state.login.token;

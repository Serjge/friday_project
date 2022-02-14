import { ThunkAction } from 'redux-thunk';

import { RootReducerType } from 'store';
import { AppActionsType } from 'types/actions';

export type AppThunkType = ThunkAction<void, RootReducerType, unknown, AppActionsType>;

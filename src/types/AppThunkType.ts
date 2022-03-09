import { ThunkAction } from 'redux-thunk';

import { RootReducerType } from 'store';
import { AllAppActionsType } from 'types/actions';

export type AppThunkType = ThunkAction<void, RootReducerType, unknown, AllAppActionsType>;

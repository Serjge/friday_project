import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  appReducer,
  authReducer,
  loginReducer,
  registrationReducer,
} from 'store/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  login: loginReducer,
  registration: registrationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootReducerType = ReturnType<typeof rootReducer>;

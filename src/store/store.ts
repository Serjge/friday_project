import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { editeProfileReducer } from './reducers/editeProfileReducer';

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
  editProfile: editeProfileReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnhancers()),
);

export type RootReducerType = ReturnType<typeof rootReducer>;

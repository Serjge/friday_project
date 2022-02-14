import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {exampleReducer} from "store/reducers";

const rootReducer = combineReducers({
    friday: exampleReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootReducerType = ReturnType<typeof rootReducer>;
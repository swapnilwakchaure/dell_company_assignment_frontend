import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as ProductReducer } from "./Product/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer, ProductReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
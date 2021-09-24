/*import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import reducer from './reducers';
import sagas from './sagas';
import actions from './actions';
import { changesMiddleware } from './middlewares';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false, immutableCheck: false }),
        sagaMiddleware,
        changesMiddleware,
    ],
});
sagaMiddleware.run(sagas);
const persistor = persistStore(store);
export type AppActions = typeof actions;
export type AppDispatch = typeof store.dispatch & void;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export { store, persistor };*/



import {applyMiddleware, compose, createStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import useCombineReducers from "./reducers";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

let middleware: any[] = []

const initialState = {};
// eslint-disable-next-line react-hooks/rules-of-hooks
const rootReducers = useCombineReducers();
const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: []
}
const persistReduce = persistReducer(persistConfig, rootReducers);

if(process.env.NODE_ENV === "development"){
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
    middleware = [...middleware, reduxImmutableStateInvariant, thunk, getDefaultMiddleware({serializableCheck: false})];
}else{
    middleware = [...middleware, thunk, getDefaultMiddleware({serializableCheck: false})]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistReduce,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

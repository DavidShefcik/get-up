/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

// Export
export {store, persistor};

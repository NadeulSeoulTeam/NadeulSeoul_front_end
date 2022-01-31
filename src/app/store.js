import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../features/Main/MainSlice';

const rootReducer = combineReducers({
  mainReducer,
});

const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;

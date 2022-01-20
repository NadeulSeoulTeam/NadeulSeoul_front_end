import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import TodoReducer from '../features/test_todo/todoSlice';
import AuthReducer from '../features/Auth/AuthSlice';

const rootReducer = combineReducers({
  todo: TodoReducer,
  auth: AuthReducer,
});

const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;

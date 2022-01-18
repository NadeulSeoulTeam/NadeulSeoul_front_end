import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/test_todo/test_todoSlice';

const rootReducer = toDoReducer;

const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;

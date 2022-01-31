import { configureStore, combineReducers } from '@reduxjs/toolkit';
import MyPageReducer from '../features/mypage/mypageSlice';
import TodoReducer from '../features/test_todo/todoSlice';

const rootReducer = combineReducers({
  mypage: MyPageReducer,
  todo: TodoReducer,
});
const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;

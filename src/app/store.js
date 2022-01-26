import { configureStore } from '@reduxjs/toolkit';
import MyPageReducer from '../features/mypage/mypageSlice';

const rootReducer = MyPageReducer;

const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;

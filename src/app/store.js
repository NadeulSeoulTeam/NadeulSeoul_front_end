import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AuthReducer from '../features/Auth/AuthSlice';
import MainReducer from '../features/Main/MainSlice';
import MyPageReducer from '../features/MyPage/MyPageSlice';
import CourseReducer from '../features/CourseMake/CourseSlice';
import CourseViewReducer from '../features/CourseView/CourseViewSlice';
import StoreReducer from '../features/StoreView/StoreSlice';

const rootReducer = combineReducers({
  auth: AuthReducer,
  main: MainReducer,
  mypage: MyPageReducer,
  course: CourseReducer,
  courseView: CourseViewReducer,
  store: StoreReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

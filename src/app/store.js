import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AuthReducer from '../features/Auth/AuthSlice';
import MainReducer from '../features/Main/MainSlice';
import MyPageReducer from '../features/MyPage/MyPageSlice';
import CourseReducer from '../features/CourseMake/CourseSlice';
import CourseViewReducer from '../features/CourseView/CourseViewSlice';
import StoreReducer from '../features/StoreView/StoreSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['mypage'],
// };

const rootReducer = combineReducers({
  auth: AuthReducer,
  main: MainReducer,
  mypage: MyPageReducer,
  course: CourseReducer,
  courseView: CourseViewReducer,
  store: StoreReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

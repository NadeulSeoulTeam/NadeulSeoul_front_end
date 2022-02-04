import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AuthReducer from '../features/Auth/AuthSlice';
import CourseReducer from '../features/CourseMake/CourseSlice';
import CourseViewReducer from '../features/CourseView/CourseViewSlice';

const rootReducer = combineReducers({
  auth: AuthReducer,
  course: CourseReducer,
  courseView: CourseViewReducer,
});

const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;

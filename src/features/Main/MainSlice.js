import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  courses: [
    // { id: 1, title: '큐레이션 제목', likes: 39 },
    // { id: 2, title: '큐레이션 제목', likes: 339 },
    // { id: 3, title: '큐레이션 제목', likes: 29 },
    // { id: 4, title: '큐레이션 제목', likes: 9 },
    // { id: 5, title: '큐레이션 제목', likes: 9 },
    // { id: 6, title: '큐레이션 제목', likes: 29 },
    // { id: 7, title: '큐레이션 제목', likes: 234 },
  ],
  users: [
    { id: 1, nickname: '나들러1', emoji: '🎈' },
    { id: 2, nickname: '나들러2', emoji: '🎁' },
    { id: 3, nickname: '나들러3', emoji: '🎃' },
    { id: 4, nickname: '나들러4', emoji: '✨' },
    { id: 5, nickname: '나들러5', emoji: '🥽' },
    { id: 6, nickname: '나들러6', emoji: '🧶' },
  ],
  selectedCourse: {},
  fetchCoursesLoading: false,
  fetchCoursesDone: false,
  fetchCoursesError: null,
};

export const fetchCourses = createAsyncThunk('main/fetchCourses', async () => {
  try {
    const response = await axios.get('/curations/statics/courses');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState,
  reducers: {
    select: (state, action) => {
      console.log('select');
      // state.selectedCourse = state.courses.find(
      //   (course) => course.id === action.id
      // );
      state.selectedCourse = action.payload;
      console.log(state.selectedCourse);
    },
  },
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.fetchCoursesLoading = true;
      state.fetchCoursesDone = false;
      state.fetchCoursesError = null;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.fetchCoursesLoading = false;
      state.fetchCoursesDone = true;
      state.courses = action.payload;
    },
    [fetchCourses.rejected]: (state, action) => {
      state.fetchCoursesLoading = true;
      state.fetchCoursesDone = false;
      state.fetchCoursesError = action.payload;
    },
  },
});

export const { select } = mainSlice.actions;

export default mainSlice.reducer;

// export const getCourses = (state) => state.main.courses;
// export const getSelectedCourse = (state) => state.main.selectedCourse;

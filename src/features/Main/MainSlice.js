import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  courses: [
    { curation_seq: 1, title: '큐레이션 제목 길게 테스트중 으아아', likes: 39 },
    { curation_seq: 2, title: '큐레이션 제목', likes: 339 },
    { curation_seq: 3, title: '큐레이션 제목', likes: 29 },
    { curation_seq: 4, title: '큐레이션 제목', likes: 9 },
    { curation_seq: 5, title: '큐레이션 제목', likes: 9 },
    { curation_seq: 6, title: '큐레이션 제목', likes: 29 },
    { curation_seq: 7, title: '큐레이션 제목', likes: 234 },
  ],
  users: [
    { id: 1, nickname: '나들러1 이것도 길게 테스트', emoji: '🎈' },
    { id: 2, nickname: '나들러2', emoji: '🎁' },
    { id: 3, nickname: '나들러3', emoji: '🎃' },
    { id: 4, nickname: '나들러4', emoji: '✨' },
    { id: 5, nickname: '나들러5', emoji: '🥽' },
    { id: 6, nickname: '나들러6', emoji: '🧶' },
  ],
  stores: [
    {
      store_seq: 1,
      name: '장소1',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 2,
      name: '장소2',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 3,
      name: '장소3',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 4,
      name: '장소4',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 5,
      name: '장소5',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
  ],
  selectedCourse: {},
  fetchCoursesLoading: false,
  fetchCoursesDone: false,
  fetchCoursesError: null,
  fetchUsersLoading: false,
  fetchUsersDone: false,
  fetchUsersError: null,
};

export const fetchCourses = createAsyncThunk('main/fetchCourses', async () => {
  try {
    const response = await axios.get('/api/v1/curations/statics/courses');
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
});

// 활발한 나들러 받아오는 주소 확인
export const fetchUsers = createAsyncThunk('main/fetchUsers', async () => {
  try {
    const response = await axios.get('/api/v1/curations/statics/nadeulers');
    return response.data.data;
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
      state.fetchCoursesError = action.payload.data.message;
    },
    [fetchUsers.pending]: (state) => {
      state.fetchUsersLoading = true;
      state.fetchUsersDone = false;
      state.fetchUsersError = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.fetchUsersLoading = false;
      state.fetchUsersDone = true;
      state.Users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.fetchUsersLoading = true;
      state.fetchUsersDone = false;
      state.fetchUsersError = action.payload.data.message;
    },
  },
});

export const { select } = mainSlice.actions;

export default mainSlice.reducer;

// export const getCourses = (state) => state.main.courses;
// export const getSelectedCourse = (state) => state.main.selectedCourse;

import { createSlice } from '@reduxjs/toolkit';

const main = createSlice({
  name: 'mainReducer',
  initialState: {
    courses: [
      { id: 1, title: '큐레이션 제목', likes: 39 },
      { id: 2, title: '큐레이션 제목', likes: 339 },
      { id: 3, title: '큐레이션 제목', likes: 29 },
      { id: 4, title: '큐레이션 제목', likes: 9 },
      { id: 5, title: '큐레이션 제목', likes: 9 },
      { id: 6, title: '큐레이션 제목', likes: 29 },
    ],
    selectedCourse: {},
  },
  reducers: {
    select: (state, action) => {
      state.selectedCourse = state.courses.find(
        (course) => course.id === action.id
      );
    },
  },
});

export const { select } = main.actions;

export default main.reducer;

export const getCourses = (state) => state.main.courses;

import { createSlice } from '@reduxjs/toolkit';

const course = createSlice({
  name: 'CourseReducer',
  initialState: {
    // map state
    Lat: 33.450701,
    Lng: 126.570667,
    level: 3,
    // course state
    course: {
      name: '너스레',
      address: '서울 서대문구 이화여대7길 22',
    },
  },
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
  },
});

export const { add, remove } = course.actions;

export default course.reducer;
export const selectLat = (state) => state.course.Lat;
export const selectLang = (state) => state.course.Lng;
export const selectLevel = (state) => state.course.level;
export const getCourse = (state) => state.course.course;

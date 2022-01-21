import { createSlice } from '@reduxjs/toolkit';

const course = createSlice({
  name: 'CourseReducer',
  initialState: {
    // map state
    Lat: 33.450701,
    Lng: 126.570667,
    level: 3,
    // course state
    course: [
      {
        name: '너스레',
        address: '서울 서대문구 이화여대7길 22',
      },
    ],
    searchKeyword: 'abc',
  },
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
    addCourse: (state) => {
      console.log('addCourse');
      state.course.push({
        name: '카라멘야',
        address: '서울 서대문구 연세로7안길 34-1',
      });
    },
    keywordInput: (state, action) => {
      console.log('keyword Input');
      console.log(action.payload);
      state.searchKeyword = action.payload;
    },
  },
});

export const { addCourse, keywordInput } = course.actions;

export default course.reducer;
export const selectLat = (state) => state.course.Lat;
export const selectLang = (state) => state.course.Lng;
export const selectLevel = (state) => state.course.level;
export const getCourse = (state) => state.course.course;
export const getKeyword = (state) => state.course.keywordInput;

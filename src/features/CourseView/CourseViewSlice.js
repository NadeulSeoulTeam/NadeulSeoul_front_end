import { createSlice } from '@reduxjs/toolkit';

const course = createSlice({
  name: 'CourseViewReducer',
  initialState: {
    // map state
    Lat: 37.5642135,
    Lng: 127.0016985,
    level: 3,
    // course state
    course: [],
    markers: [],
    clicked: false,
  },
  reducers: {
    setCourse: (state, action) => {
      console.log('updateCourse');
      state.course = action.payload;
    },
    addMarkers: (state, action) => {
      state.markers.push(action.payload);
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
  },
});

export const { setCourse, addMarkers, setClicked } = course.actions;

export default course.reducer;
export const selectLat = (state) => state.course.Lat;
export const selectLang = (state) => state.course.Lng;
export const selectLevel = (state) => state.course.level;
export const getCourse = (state) => state.course.course;
export const getKeyword = (state) => state.course.keywordInput;
export const getSearchData = (state) => state.course.searchData;
export const getMarkers = (state) => state.course.markers;
export const getClicked = (state) => state.course.clicked;

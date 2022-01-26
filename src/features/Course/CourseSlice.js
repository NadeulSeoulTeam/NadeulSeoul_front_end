import { createSlice } from '@reduxjs/toolkit';

const course = createSlice({
  name: 'CourseReducer',
  initialState: {
    // map state
    Lat: 37.5642135,
    Lng: 127.0016985,
    level: 3,
    // course state
    course: [],
    searchKeyword: 'abc',
    searchData: {
      data: [],
      status: '',
      pagination: {},
    },
    markers: [],
    clicked: false,
  },
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
    addCourse: (state, action) => {
      console.log('addCourse');
      console.log(action.payload);
      state.course.push(action.payload);
    },
    deleteCourse: (state, action) => {
      console.log('deleteCourse');
      console.log(action.payload, 'action');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < state.course.length; i++) {
        console.log(state.course[i].id, 'course');
        if (state.course[i].id === action.payload.id) {
          state.course.splice(i, 1);
          break;
        }
      }
    },
    keywordInput: (state, action) => {
      console.log('keywordInput Start');
      console.log(action.payload);
      state.searchKeyword = action.payload;
    },
    searchDataInput: (state, action) => {
      console.log('SearchDataInput Start');
      state.searchData.data = action.payload.data;
      state.searchData.status = action.payload.status;
      // state.searchData.pagination = action.payload.pagination;
    },
    addMarkers: (state, action) => {
      state.markers.push(action.payload);
    },
    removeMarkers: (state) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < state.Markers.length; i++) {
        state.markers[i].setMap(null);
      }
      state.markers = [];
    },
    moveToList: (state, action) => {
      state.Lat = action.payload.lat;
      state.Lng = action.payload.lng;
      console.log(state.Lat, state.Lng, 'langlat set');
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
  },
});

export const {
  setKakaoMap,
  addCourse,
  keywordInput,
  searchDataInput,
  addMarkers,
  removeMarkers,
  moveToList,
  setClicked,
  deleteCourse,
} = course.actions;

export default course.reducer;
export const selectLat = (state) => state.course.Lat;
export const selectLang = (state) => state.course.Lng;
export const selectLevel = (state) => state.course.level;
export const getCourse = (state) => state.course.course;
export const getKeyword = (state) => state.course.keywordInput;
export const getSearchData = (state) => state.course.searchData;
export const getMarkers = (state) => state.course.markers;
export const getClicked = (state) => state.course.clicked;

/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getToken } from '../../common/api/JWT-Token';

import axios from '../../common/api/httpCommunication';
// import _concat from 'lodash/concat';
// import _remove from 'lodash/remove';
// 큐레이션 요청
export const courseInfoPost = createAsyncThunk(
  '/CourseCreationForm',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('auth/curations', data, {
        headers: { Authorization: getToken() },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// image
export const courseImagePost = createAsyncThunk(
  '/CourseCreationForm/courseImagePost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('auth/curations/images', data, {
        headers: { Authorization: getToken() },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// 큐레이션 삭제
export const courseInfoDelete = createAsyncThunk(
  '/CourseCreationForm',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `/api/v1/curations/${data.curation_seq}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const initialState = {
  courseInfo: {},
  courseInfoPostDone: false,
  courseInfoPostError: null,
  courseInfoPostSending: false,
};

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
    clickedIndex: -1,
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
    updateCourse: (state, action) => {
      console.log('updateCourse');
      state.course = action.payload;
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
      console.log(state.Lat, state.Lng, 'langlat set1111');
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
    setClickedIndex: (state, action) => {
      state.clickedIndex = action.payload;
    },
  },

  extraReducers: {
    // 코스 info post
    [courseInfoPost.pending]: (state) => {
      state.courseInfoPostSending = true;
      state.courseInfoPostDone = false;
      state.courseInfoPostError = null;
    },
    [courseInfoPost.fulfilled]: (state, action) => {
      state.courseInfoPostSending = false;
      state.courseInfoPostDone = true;
      // 수정
      state.courseInfo = action.payload.CourseInfo;
    },
    [courseInfoPost.rejected]: (state, action) => {
      state.courseInfoPostSending = true;
      state.courseInfoPostError = action.error.message;
    },
    // 코스 이미지 post
    [courseImagePost.pending]: (state) => {
      state.courseImagePostSending = true;
      state.courseImagePostDone = false;
      state.courseImagePostError = null;
    },
    [courseImagePost.fulfilled]: (state, action) => {
      state.courseImagePostSending = false;
      state.courseImagePostDone = true;
      // 수정
    },
    [courseImagePost.rejected]: (state, action) => {
      state.courseImagePostSending = true;
      state.courseImagePostError = action.error.message;
    },
  },
});

export const {
  setKakaoMap,
  addCourse,
  deleteCourse,
  updateCourse,
  keywordInput,
  searchDataInput,
  addMarkers,
  removeMarkers,
  moveToList,
  setClicked,
  setClickedIndex,
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
export const getClickedIndex = (state) => state.course.clickedIndex;

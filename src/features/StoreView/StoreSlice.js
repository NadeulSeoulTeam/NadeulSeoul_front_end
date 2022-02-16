/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../common/api/httpCommunication';

// 스크랩(좋아요) 누르기
export const clickLike = createAsyncThunk(
  'StoreView/like',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `auth/stores/bookmarks/${data.storeSeq}`,
        data
      );

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

// 스크랩(좋아요) 취소
export const clickLikeCancel = createAsyncThunk(
  'StoreView/likeCancel',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `auth/stores/bookmarks/${data.storeSeq}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 스크랩(좋아요) 확인
export const clickLikeCheck = createAsyncThunk(
  'StoreView/likeCancel',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `auth/stores/bookmarks/${data.storeSeq}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err);
    }
  }
);

export const initialState = {
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
  store: {},
  clickedIndex: -1,
  // axios
  courseInfo: {}, // 코스 정보 조회
  courseInfoLoading: false,
  courseInfoDone: false,
  courseInfoError: null,
  comment: '', // 댓글 보내기
  sendCommentLoading: false,
  sendCommentDone: false,
  sendCommentError: null,
  likeClicked: false,
  clickLikeLoading: false, // 좋아요 보내기
  clickLikeDone: false,
  clickLikeError: null,
  clickLikeCancelLoading: false,
  clickLikeCancelDone: false,
  clickLikeCancelError: null,
  clickLikeCheckLoading: false,
  clickLikeCheckDone: false,
  clickLikeCheckError: null,
};

const store = createSlice({
  name: 'StoreReducer',
  initialState,
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
    searchDataInputs: (state, action) => {
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
      console.log(state.Lat, state.Lng, 'langlat set123123');
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
    setStore: (state, action) => {
      console.log(action.payload, 'asdasda');
      state.store = action.payload;
    },
    setClickedIndex: (state, action) => {
      console.log(action.payload);
      state.clickedIndex = action.payload;
    },
  },
  extraReducers: {
    // like 보내기
    [clickLike.pending]: (state) => {
      state.clickLikeLoading = true;
      state.clickLikeDone = false;
      state.clickLikeError = null;
    },
    [clickLike.fulfilled]: (state, action) => {
      state.clickLikeLoading = false;
      state.clickLikeDone = true;
      state.likeClicked = true;
    },
    [clickLike.rejected]: (state, action) => {
      state.clickLikeLoading = false;
      state.clickLikeError = action.error.message;
    },
    // like cancel
    [clickLikeCancel.pending]: (state) => {
      state.clickLikeCancelLoading = true;
      state.clickLikeCancelDone = false;
      state.clickLikeCancelError = null;
    },
    [clickLikeCancel.fulfilled]: (state, action) => {
      state.clickLikeCancelLoading = false;
      state.clickLikeCancelDone = true;
      state.likeClicked = false;
    },
    [clickLikeCancel.rejected]: (state, action) => {
      state.clickLikeCancelLoading = false;
      state.clickLikeCancelError = action.error.message;
    },
    [clickLikeCheck.pending]: (state) => {
      state.clickLikeCheckLoading = true;
      state.clickLikeCheckDone = false;
      state.clickLikeCheckError = null;
    },
    [clickLikeCheck.fulfilled]: (state, action) => {
      state.clickLikeCheckLoading = false;
      state.clickLikeCheckDone = true;
      console.log(action.payload);
      if (action.payload.data === null) return;
      state.likeClicked = action.payload.data.isBookmark;
    },
    [clickLikeCheck.rejected]: (state, action) => {
      state.clickLikeCheckLoading = false;
      state.clickLikeCheckError = action.error.message;
    },
  },
});

export const {
  setKakaoMap,
  addCourse,
  deleteCourse,
  updateCourse,
  keywordInput,
  searchDataInputs,
  addMarkers,
  removeMarkers,
  moveToList,
  setClicked,
  setStore,
  setClickedIndex,
} = store.actions;

export default store.reducer;
export const selectLat = (state) => state.store.Lat;
export const selectLang = (state) => state.store.Lng;
export const selectLevel = (state) => state.store.level;
export const getCourse = (state) => state.store.course;
export const getKeyword = (state) => state.store.keywordInput;
export const getSearchData = (state) => state.store.searchData;
export const getMarkers = (state) => state.store.markers;
export const getClicked = (state) => state.store.clicked;
export const getStore = (state) => state.store.store;
export const getClickedIndex = (state) => state.store.clickedIndex;

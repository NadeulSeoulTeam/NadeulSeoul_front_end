/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _find from 'lodash/find';
import axios from '../../common/api/httpCommunication';

// Course 정보 가져오기
export const getCourseInfo = createAsyncThunk(
  'CourseView/CourseInfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`auth/curations/${data.curationSeq}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 댓글 가져오기
export const getCommentList = createAsyncThunk(
  'CourseView/CommentInfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `curations/comments/${data.curationSeq}?page=${data.pageNumber}&size=${data.pageSize}&sort=date,desc`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// 댓글 보내기
export const sendComment = createAsyncThunk(
  'CourseView/sendComment',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`curations/comments/auth`, data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// 스크랩(좋아요) 확인하기
export const isLike = createAsyncThunk(
  'CourseView/isLike',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `auth/curations/bookmarks/${data.curationSeq}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// 스크랩(좋아요) 누르기
export const clickLike = createAsyncThunk(
  'CourseView/clickLike',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `auth/curations/bookmarks/${data.curationSeq}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 스크랩(좋아요) 취소
export const clickLikeCancel = createAsyncThunk(
  'CourseView/clickLikeCancel',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `auth/curations/bookmarks/${data.curationSeq}`
      );
      return response.data;
    } catch (err) {
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
  markers: [],
  clicked: false,

  // axios
  courseInfo: {}, // 코스 정보 조회
  courseInfoLoading: false,
  courseInfoDone: false,
  courseInfoError: null,
  comment: '', // 댓글 보내기
  sendCommentLoading: false,
  sendCommentDone: false,
  sendCommentError: null,
  getComment: [], // 댓글 리스트 받아오기
  getCommentLoading: false,
  getCommentDone: false,
  getCommentError: null,
  isLiked: false,
  isLikeLoading: false, // 좋아요 확인
  isLikeDone: false,
  isLikeError: null,
  clickLikeLoading: false, // 좋아요 보내기
  clickLikeDone: false,
  clickLikeError: null,
  clickLikeCancelLoading: false, // 좋아요 취소
  clickLikeCancelDone: false,
  clickLikeCancelError: null,
};
const course = createSlice({
  name: 'courseView',
  initialState,
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
  extraReducers: {
    // courseinfo 받기
    [getCourseInfo.pending]: (state) => {
      state.courseInfoLoading = true;
      state.courseInfoDone = false;
      state.courseInfoError = null;
    },
    [getCourseInfo.fulfilled]: (state, action) => {
      state.courseInfoLoading = false;
      // 들어오는 정보 맞춰 주기
      state.courseInfo = action.payload.data;
      state.courseInfoDone = true;
    },
    [getCourseInfo.rejected]: (state, action) => {
      state.courseInfoLoading = false;
      state.courseInfoError = action.error.message;
      console.log(action.error.message);
    },
    // comment 보내기
    [sendComment.pending]: (state) => {
      state.sendCommentLoading = true;
      state.sendCommentDone = false;
      state.sendCommentError = null;
    },
    [sendComment.fulfilled]: (state, action) => {
      state.sendCommentLoading = false;
      state.sendCommentDone = true;
    },
    [sendComment.rejected]: (state, action) => {
      state.sendCommentLoading = false;
      state.sendCommentError = action.error.message;
    },
    // like 확인
    [isLike.pending]: (state) => {
      state.isLikeLoading = true;
      state.isLikeDone = false;
      state.isLikeError = null;
    },
    [isLike.fulfilled]: (state, action) => {
      state.isLikeLoading = false;
      state.isLikeDone = true;
      state.isLiked = action.payload.data;
    },
    [isLike.rejected]: (state, action) => {
      state.isLikeLoading = false;
      state.isLikeError = action.error.message;
    },
    // like 보내기
    [clickLike.pending]: (state) => {
      state.clickLikeLoading = true;
      state.clickLikeDone = false;
      state.clickLikeError = null;
    },
    [clickLike.fulfilled]: (state, action) => {
      state.clickLikeLoading = false;
      state.clickLikeDone = true;
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
    },
    [clickLikeCancel.rejected]: (state, action) => {
      state.clickLikeCancelLoading = false;
      state.clickLikeCancelError = action.error.message;
    },
    [getCommentList.pending]: (state) => {
      state.getCommentLoading = true;
      state.getCommentDone = false;
      state.getCommentError = null;
    },
    [getCommentList.fulfilled]: (state, action) => {
      state.getCommentLoading = false;
      for (let i = 0; i < action.payload.data.content.length; i += 1) {
        state.getComment.push(action.payload.data.content[i]);
      }
      state.getCommentDone = true;
    },
    [getCommentList.rejected]: (state, action) => {
      state.getCommentLoading = false;
      state.getCommentError = action.error.message;
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
export const getComment = (state) => state.course.getComment;

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
// 코스 삭제
export const deleteCourseInfo = createAsyncThunk(
  'CourseView/deleteCourseInfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`auth/curations/${data.curationSeq}`);
      console.log(response.data, '삭제시도');

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
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 스토어(좋아요) 누르기
export const clickStoreLike = createAsyncThunk(
  'CourseView/clickStoreLike',
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

// 스토어(좋아요) 취소
export const clickStoreLikeCancel = createAsyncThunk(
  'CourseView/clickStoreLikeCancel',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `auth/stores/bookmarks/${data.storeSeq}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 스토어(좋아요) 확인
export const clickStoreLikeCheck = createAsyncThunk(
  'CourseView/clickStoreLikeCheck',
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
  markers: [],
  clicked: false,

  // axios
  courseInfo: {}, // 코스 정보 조회
  courseInfoLoading: false,
  courseInfoDone: false,
  courseInfoError: null,
  courseDeleteLoading: false,
  courseDeleteDone: false,
  courseDeleteError: null,
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
  clickStoreLikeLoading: false, // 좋아요 보내기
  clickStoreLikeDone: false,
  clickStoreLikeError: null,
  clickStoreLikeCancelLoading: false,
  clickStoreLikeCancelDone: false,
  clickStoreLikeCancelError: null,
  clickStoreLikeCheckLoading: false,
  clickStoreLikeCheckDone: false,
  clickStoreLikeCheckError: null,
  likeStoreClicked: false,
  totalPages: 0,
};
const course = createSlice({
  name: 'CourseView',
  initialState,
  reducers: {
    setCourse: (state, action) => {
      console.log('updateCourse');
      state.course = action.payload;
    },
    addMarkers: (state, action) => {
      state.markers.push(action.payload);
    },
    setMarkers: (state, action) => {
      state.markers = action.payload;
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
    setCommentStartEmpty: (state) => {
      state.getComment = [];
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
      console.log(action.payload);
    },
    [getCourseInfo.rejected]: (state, action) => {
      state.courseInfoLoading = false;
      state.courseInfoError = action.error.message;
      console.log(action.error.message);
    },
    [deleteCourseInfo.pending]: (state) => {
      state.courseDeleteLoading = true;
      state.courseDeleteInfoDone = false;
      state.courseInfoDeleteError = null;
    },
    [deleteCourseInfo.fulfilled]: (state, action) => {
      state.courseDeleteLoading = false;
      // 들어오는 정보 맞춰 주기
      state.courseInfo = action.payload.data;
      state.courseDeleteInfoDone = true;
      console.log(action.payload);
    },
    [deleteCourseInfo.rejected]: (state, action) => {
      state.courseDeleteLoading = false;
      state.courseInfoDeleteError = action.error.message;
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
      console.log(action.payload.data.content);
      // for (let i = 0; i < action.payload.data.content.length; i += 1) {
      //   state.getComment.push(action.payload.data.content[i]);
      // }
      state.getComment = action.payload.data.content;
      state.totalPages = action.payload.data.totalPages;
      state.getCommentDone = true;
    },
    [getCommentList.rejected]: (state, action) => {
      state.getCommentLoading = false;
      state.getCommentError = action.error.message;
    },
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
    // 초기 확인
    [clickStoreLikeCheck.pending]: (state) => {
      state.clickStoreLikeCheckLoading = true;
      state.clickStoreLikeCheckDone = false;
      state.clickStoreLikeCheckError = null;
    },
    [clickStoreLikeCheck.fulfilled]: (state, action) => {
      state.clickStoreLikeCheckLoading = false;
      state.clickStoreLikeCheckDone = true;
      console.log(action.payload);
      if (action.payload.data === null) return;
      state.likeStoreClicked = action.payload.data.isBookmark;
    },
    [clickStoreLikeCheck.rejected]: (state, action) => {
      state.clickStoreLikeCheckLoading = false;
      state.clickStoreLikeCheckError = action.error.message;
    },
    // like click
    [clickStoreLike.pending]: (state) => {
      state.clickStoreLikeLoading = true;
      state.clickStoreLikeDone = false;
      state.clickStoreLikeError = null;
    },
    [clickStoreLike.fulfilled]: (state, action) => {
      state.clickStoreLikeLoading = false;
      state.clickStoreLikeDone = true;
      console.log(action.payload);
      if (action.payload.status !== 'OK') return;
      state.likeStoreClicked = true;
    },
    [clickStoreLike.rejected]: (state, action) => {
      state.clickStoreLikeLoading = false;
      state.clickStoreLikeError = action.error.message;
    },
    // click like cancel
    [clickStoreLikeCancel.pending]: (state) => {
      state.clickStoreLikeCancelLoading = true;
      state.clickStoreLikeCancelDone = false;
      state.clickStoreLikeCancelError = null;
    },
    [clickStoreLikeCancel.fulfilled]: (state, action) => {
      state.clickStoreLikeCancelLoading = false;
      state.clickStoreLikeCancelDone = true;
      console.log(action.payload);
      if (action.payload.status !== 'OK') return;
      state.likeStoreClicked = false;
    },
    [clickStoreLikeCancel.rejected]: (state, action) => {
      state.clickStoreLikeCancelLoading = false;
      state.clickStoreLikeCancelError = action.error.message;
    },
  },
});

export const {
  setCourse,
  addMarkers,
  setClicked,
  setCommentStartEmpty,
  setMarkers,
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
export const getComment = (state) => state.course.getComment;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import _concat from 'lodash/concat';
import _remove from 'lodash/remove';
import _find from 'lodash/find';

// dummy data for header part
// 이모지 필요
// 내 나들코스, 찜한 나들 코스, 찜한 장소 더미 데이터 만들기

export const User = [
  {
    id: 1,
    nickname: 'meanstrike',
    emoji: '🐳',
    Followings: 4,
    Followers: 3,
    myNadlecourse: [
      { myNadlecourseId: 5, imgUrl: 'https://picsum.photos/200/300?random=5' },
      { myNadlecourseId: 6, imgUrl: 'https://picsum.photos/200/300?random=6' },
      { myNadlecourseId: 7, imgUrl: 'https://picsum.photos/200/300?random=7' },
      { myNadlecourseId: 8, imgUrl: 'https://picsum.photos/200/300?random=8' },
      { myNadlecourseId: 9, imgUrl: 'https://picsum.photos/200/300?random=9' },
    ],
    likePlace: [
      { likePlaceId: 1, imgUrl: 'https://picsum.photos/200/300?random=9' },
      { likePlaceId: 2, imgUrl: 'https://picsum.photos/200/300?random=10' },
      { likePlaceId: 3, imgUrl: 'https://picsum.photos/200/300?random=11' },
      { likePlaceId: 4, imgUrl: 'https://picsum.photos/200/300?random=12' },
    ],
    likeNadlecourse: [
      {
        likeNadlecourseId: 1,
        imgUrl: 'https://picsum.photos/200/300?random=1',
      },
      {
        likeNadlecourseId: 2,
        imgUrl: 'https://picsum.photos/200/300?random=2',
      },
      {
        likeNadlecourseId: 3,
        imgUrl: 'https://picsum.photos/200/300?random=3',
      },
      {
        likeNadlecourseId: 4,
        imgUrl: 'https://picsum.photos/200/300?random=4',
      },
    ],
  },
  {
    id: 7,
    nickname: 'taw1019',
    emoji: '🍎',
    Followings: 2,
    Followers: 3,
    myNadlecourse: [
      { myNadlecourseId: 5, imgUrl: 'https://picsum.photos/200/300?random=5' },
      { myNadlecourseId: 6, imgUrl: 'https://picsum.photos/200/300?random=6' },
      { myNadlecourseId: 7, imgUrl: 'https://picsum.photos/200/300?random=7' },
      { myNadlecourseId: 8, imgUrl: 'https://picsum.photos/200/300?random=8' },
    ],
    likePlace: [
      { likePlaceId: 1, imgUrl: 'https://picsum.photos/200/300?random=9' },
      { likePlaceId: 2, imgUrl: 'https://picsum.photos/200/300?random=10' },
      { likePlaceId: 3, imgUrl: 'https://picsum.photos/200/300?random=11' },
      { likePlaceId: 4, imgUrl: 'https://picsum.photos/200/300?random=12' },
    ],
    likeNadlecourse: [
      {
        likeNadlecourseId: 1,
        imgUrl: 'https://picsum.photos/200/300?random=1',
      },
      {
        likeNadlecourseId: 2,
        imgUrl: 'https://picsum.photos/200/300?random=2',
      },
      {
        likeNadlecourseId: 3,
        imgUrl: 'https://picsum.photos/200/300?random=3',
      },
      {
        likeNadlecourseId: 4,
        imgUrl: 'https://picsum.photos/200/300?random=4',
      },
    ],
  },
];

export const FollowList = [
  {
    id: 1,
    nickname: 'meanstrike',
    emoji: '🐳',
    FollowingsList: [
      { nickname: 'han', id: '2', emoji: '🐶' },
      { nickname: 'kim', id: '3', emoji: '🐱' },
      { nickname: 'nam', id: '5', emoji: '🐭' },
      { nickname: 'taw1019', id: '7', emoji: '🍎' },
    ],
    FollowersList: [
      { nickname: 'heyhey', id: '6', emoji: '🦅' },
      { nickname: 'yoo', id: '4', emoji: '🦆' },
      { nickname: 'nam', id: '5', emoji: '🐭' },
    ],
  },
  {
    id: 7,
    nickname: 'taw1019',
    emoji: '🍎',
    FollowingsList: [
      { nickname: 'han', id: '2', emoji: '🐶' },
      { nickname: 'kim', id: '3', emoji: '🐱' },
    ],
    FollowersList: [
      { nickname: 'heyhey', id: '6', emoji: '🦅' },
      { nickname: 'yoo', id: '4', emoji: '🦆' },
      { nickname: 'meanstrike', id: '1', emoji: '🐳' },
    ],
  },
];

// 문의 게시판 목록

export const BoardList = {
  question_seq: '1',
  question_title: '안녕하세요. 관리자님 나들서울 잘 쓰고 있습니다.',
  question_date: Date.now(),
};

// 문의 게시판 상세내용

export const BoardListItem = {
  question_seq: '1',
  member_seq: '1',
  question_title: '안녕하세요. 관리자님 나들서울 잘 쓰고 있습니다.',
  question_content: '늘 잘 사용하고 있습니다. ',
  question_date: Date.now(),
  answer: '네 감사합니다 사용자님',
  answer_date: '2022, 0202',
};

// 유저정보 조회
export const loadUser = createAsyncThunk(
  'mypage/loaduser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('벡엔드 주소');
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 팔로워 목록 조회
export const loadFollowers = createAsyncThunk(
  'mypage/loadFollowers',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('백엔드 주소');
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 팔로잉 목록 조회
export const loadFollowings = createAsyncThunk(
  'mypage/loadFollowings',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('백엔드 주소');
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// 팔로잉 요청
export const follow = createAsyncThunk(
  'mypage/follow',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/');
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 언팔로우 요청
export const unfollow = createAsyncThunk(
  'mypage/unfollow',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete('백앤드 주소');
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 목록 조회

export const loadBoardList = createAsyncThunk(
  'mypage/loadBoardList',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('백엔드 주소');
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 상세 정보 조회

export const loadBoardListItem = createAsyncThunk(
  'mypage/loadBoardListItem',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('백엔드 주소');
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 게시글 작성

export const addPost = createAsyncThunk(
  'mypage/addPost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('백엔드 주소', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 게시글 수정

export const updatePost = createAsyncThunk(
  'mypage/addPost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put('백엔드 주소', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// 문의 게시판 게시글 삭제

export const removePost = createAsyncThunk(
  'mypage/removePost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete('백엔드 주소', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 답변 등록

export const addAnswer = createAsyncThunk(
  'mypage/addAnswer',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('백엔드 주소', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 답변 수정

export const updateAnswer = createAsyncThunk(
  'mypage/updateAnswer',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put('백엔드 주소', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 답변 삭제

export const removeAnswer = createAsyncThunk(
  'mypage/removeAnswer',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete('백엔드 주소', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 기본 state

export const initialState = {
  userInfo: User, // 내 정보
  FollowInfo: FollowList, // 팔로잉, 팔로워 정보
  mainPosts: [], // 문의게시판 목록
  singlePost: null, // 문의게시판 상세 정보
  loadUserLoading: false, // mypage haeder 정보 조회 시도
  loadUserDone: false,
  loadUserError: null,
  loadFollowingsLoading: false, // 팔로잉 목록 조회 시도
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false, // 팔로워 목록 조회 시도
  loadFollowersDone: false,
  loadFollowersError: null,
  followLoading: false, // 팔로우(팔로우/언팔) 시도
  followDone: false,
  followError: null,
  loadPostsLoading: false, // 문의게시판 목록 조회 시도
  loadPostsDone: false,
  loadPostsError: null,
  loadPostItemLoading: false, // 문의게시판 상세정보 조회 시도
  loadPostItemDone: false,
  loadPostItemError: null,
  addPostLoading: false, // 문의 게시판 글 작성 시도
  addPostDone: false,
  addPostError: null,
  removePostLoading: false, // 문의 게시판 글 삭제 시도
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false, // 문의 게시판 글 수정 시도
  updatePostDone: false,
  updatePostError: null,
  addAnswerLoading: false, // 문의 게시판 답변 작성 시도
  addAnswerDone: false,
  addAnswerError: null,
  updateAnswerLoading: false, // 문의 게시판 답변 수정 시도
  updateAnswerDone: false,
  updateAnswerError: null,
  removeAnswerLoading: false, // 문의 게시판 답변 삭제 시도
  removeAnswerDone: false,
  removeAnswerError: null,
};

const mypageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {},
  extraReducers: {
    // 유저 정보 조회
    [loadUser.pending]: (state) => {
      state.loadUserLoading = true;
      state.loadUserDone = false;
      state.loadUserError = null;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.loadUserLoading = false;
      state.loadUserDone = true;
      state.userInfo = action.payload; // 서버에서 온 user 정보가 담긴다.
    },
    [loadUser.rejected]: (state, action) => {
      state.loadUserLoading = false;
      state.loadUserError = action.error.message;
    },

    // 팔로워 유저 정보 조회
    [loadFollowers.pending]: (state) => {
      state.loadFollowersLoading = true;
      state.loadFollowersDone = false;
      state.loadFollowersError = null;
    },

    [loadFollowers.fulfilled]: (state, action) => {
      state.loadFollowersLoading = false;
      state.FollowInfo.FollowersList = action.data;
      state.loadFollowersDone = true;
    },
    [loadFollowers.rejected]: (state, action) => {
      state.loadFollowersLoading = true;
      state.loadFollowersError = action.error.message;
    },
    // 팔로잉 유저 정보 조회
    [loadFollowings.pending]: (state) => {
      state.loadFollowingsLoading = true;
      state.loadFollowingsDone = false;
      state.loadFollowingsError = null;
    },
    [loadFollowings.fulfilled]: (state, action) => {
      state.loadFollowingsLoading = false;
      state.FollowInfo.FollowersList = action.data;
      state.loadFollowingsDone = true;
    },
    [loadFollowings.rejected]: (state, action) => {
      state.loadFollowingsLoading = true;
      state.loadFollowingsError = action.error.message;
    },
    // 팔로우 request
    [follow.pending]: (state) => {
      state.followLoading = true;
      state.followDone = false;
      state.followError = null;
    },
    [follow.fulfilled]: (state, action) => {
      state.followLoading = false;
      state.followDone = true;
      state.FollowInfo.FollowingsList.push({
        id: action.payload.id,
      });
    },
    [follow.rejected]: (state, action) => {
      state.followLoading = false;
      state.followError = action.error.message;
    },
    // 언팔로우 request
    [follow.pending]: (state) => {
      state.followLoading = true;
      state.followDone = false;
      state.followError = null;
    },
    [follow.fulfilled]: (state, action) => {
      state.followLoading = false;
      state.followDone = true;
      _remove(state.FollowInfo.FollowinsList, {
        id: action.payload.id,
      });
    },
    [follow.rejected]: (state, action) => {
      state.followLoading = false;
      state.followError = action.error.message;
    },
    // 문의 게시판 목록 request
    [loadBoardList.pending]: (state) => {
      state.loadPostsLoading = true;
      state.loadPostsDone = false;
      state.loadPostsError = null;
    },
    [loadBoardList.fulfilled]: (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsDone = true;
      state.mainPosts = _concat(state.mainPosts, action.payload);
    },
    [loadBoardList.rejected]: (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsError = action.error.message;
    },
    // 문의 게시판 상세 정보 request
    [loadBoardList.pending]: (state) => {
      state.loadPostsLoading = true;
      state.loadPostsDone = false;
      state.loadPostsError = null;
    },
    [loadBoardList.fulfilled]: (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsDone = true;
      state.singlePost = action.payload;
    },
    [loadBoardList.rejected]: (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsError = action.error.message;
    },
    // 문의 게시판 글 작성 request
    [addPost.pending]: (state) => {
      state.addPostLoading = true;
      state.addPostDone = false;
      state.addPostError = null;
    },
    [addPost.fulfilled]: (state, action) => {
      state.addPostLoading = false;
      state.addPostDone = true;
      state.mainPosts.unshift(action.payload);
    },
    [addPost.rejected]: (state, action) => {
      state.addPostLoading = false;
      state.addPostError = action.error.message;
    },
    // 문의 게시판 글 수정 request
    [removePost.pending]: (state) => {
      state.removeAnswerLoading = true;
      state.removeAnswerDone = false;
      state.removeAnswerError = null;
    },
    [removePost.fulfilled]: (state, action) => {
      state.removeAnswerLoading = false;
      state.removeAnswerDone = true;
      // payload에 담길 PostId 변수 명 바뀔 수 있음
      _remove(state.mainPosts, { id: action.payload.PostId });
    },
    [removePost.rejected]: (state, action) => {
      state.removeAnswerLoading = false;
      state.removeAnswerError = action.error.message;
    },
  },
});
export default mypageSlice.reducer;

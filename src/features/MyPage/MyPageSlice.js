import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _concat from 'lodash/concat';
// import _remove from 'lodash/remove';
// import _find from 'lodash/find';

// dummy data for 인피니티 스크롤 쳅터마다 각각 마다 구현해야 함!

import shortId from 'shortid';
import axios from '../../common/api/httpCommunication';

// dummy data for header part
// 이모지 필요
// 내 나들코스, 찜한 나들 코스, 찜한 장소 더미 데이터 만들기

// 문의 게시판 createData
const randomNum = Math.random() * 5;
const randomNumFloor = Math.floor(randomNum);
export const generateDummyCard = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      myNadlecourseId: shortId.generate(),
      imgUrl: `https://picsum.photos/200/300?random=${randomNumFloor}`,
    }));

export const generateDummyCardLikePlcae = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      likeplaceId: shortId.generate(),
      storeName: '장소 이름',
      addressName: '서울시 서대문구 장천동 53-20 ',
      categoryName: '오코노미야끼 전문식당',
    }));

export const User = [
  {
    id: 1,
    nickname: 'meanstrike',
    emoji: '🐳',
    Followings: 4,
    Followers: 3,
  },
  {
    id: 2,
    nickname: 'taw1019',
    emoji: '🍎',
    Followings: 2,
    Followers: 3,
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
    id: 2,
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

// 문의 게시판 상세내용

export const BoardListItem = {
  question_seq: '1',
  member_seq: '1',
  question_title: '안녕하세요. 관리자님 나들서울 잘 쓰고 있습니다.',
  question_content: '늘 잘 사용하고 있습니다. 너무 행복합니다 ',
  question_date: Date.now(),
  answer: '앞으로도 잘 써주세영',
  answer_date: '2022, 0202',
};

// 인피니티 스크롤 for MyNadle, LikeNadle course

export const loadPostsInfinity = createAsyncThunk(
  'mypage/loadPostsInfinity',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/curations?page=${data.page}&size=${data.size}`
      );
      return response;
    } catch (err) {
      return rejectWithValue(err.resonse.data);
    }
  }
);

// 인피니티 스크롤 for LikePlace

export const loadPostsInfinityLikePlace = createAsyncThunk(
  'mypage/loadPostsInfinityLikePlace',
  async (data, { rejectWithValue }) => {
    try {
      // const response = await axios.get(
      //   `/curations?page=${data.page}&size=${data.size}`
      // );
      return generateDummyCardLikePlcae(8);
    } catch (err) {
      return rejectWithValue(err.resonse.data);
    }
  }
);

// 유저정보 조회
export const loadUser = createAsyncThunk(
  'mypage/loaduser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/mypage/${data}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.resonse.data);
    }
  }
);

// 팔로워 목록 조회
export const loadFollowers = createAsyncThunk(
  'mypage/loadFollowers',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/mypage/${data}/follower`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.resonse.data);
    }
  }
);

// 팔로잉 목록 조회
export const loadFollowings = createAsyncThunk(
  'mypage/loadFollowings',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/mypage/${data}/followee`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.resonse.data);
    }
  }
);

// 팔로잉 요청
export const follow = createAsyncThunk(
  'mypage/follow',
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios.post(`mypage/${data}/follow`);
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
      const response = await axios.delete(`mypage/${data}/unfollow`);
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
      const response = await axios.get(`/inquiries/questions/list/${data}`);
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
      const response = await axios.get(
        `/inquiries/questions/${data.questionSeq}`
      );
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
      const response = await axios.post('/inquiries/questions', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 문의 게시판 게시글 수정

export const updatePost = createAsyncThunk(
  'mypage/updatePost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/inquiries/questions/${data.questionSeq}`,
        data
      );
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
    console.log(data);
    try {
      const response = await axios.delete(`/inquiries/questions/${data}`);
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
    console.log(data);
    try {
      const response = await axios.post('/inquiries/answers', data);
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
    console.log(data);
    try {
      const response = await axios.put(`/inquiries/answers`, data);
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
      const response = await axios.delete(`/inquiries/answers/${data}`);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 기본 state
// 서버 연결하면 기존의 dummydate 연결 풀어야 함
export const initialState = {
  userInfo: User, // 내 정보 test
  user: null,
  followinfoToList: null,
  InfinityPosts: [], // infinity scroll myNadle, LikeNadle
  hasMorePosts: true,
  InfinityPostsLikePlace: [], // infinity scroll LikePlace
  hasMoreLikePlace: true,
  FollowInfo: FollowList, // 팔로잉, 팔로워 정보 test
  followeeUsers: null,
  followerUsers: null,
  mainPosts: [], // 문의게시판 목록
  singlePost: null, // 문의 게시판 상세 정보
  PostId: null, // 문의게시판 postId
  UserId: null, // 문의게시판 UserId
  loadInfinityPostsLoading: false, // 인피니티 스크롤 요청 myNadle, LikeNadle
  loadInfinityPostsDone: false,
  loadInfinityPostsError: null,
  loadInfinityPostsLikePlaceLoading: false, // 인피니티 스크롤 요청 LikePlace
  loadInfinityPostsLikePlaceDone: false,
  loadInfinityPostsLikePlaceError: null,
  loadUserLoading: false, // mypage 유저 정보 조회 시도
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

const MyPageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {
    postIdToListItem(state, action) {
      state.PostId = action.payload;
    },
    UserIdToListItem(state, action) {
      state.UserId = action.payload;
    },
    followinfoToList(state, action) {
      state.followinfoToList = action.payload;
    },
  },
  extraReducers: {
    // 인피니티 스크롤 myNadle, LikeNadle
    [loadPostsInfinity.pending]: (state) => {
      state.loadInfinityPostsLoading = true;
      state.loadInfinityPostsDone = false;
      state.loadInfinityPostsError = null;
    },
    [loadPostsInfinity.fulfilled]: (state, action) => {
      state.loadInfinityPostsLoading = false;
      state.loadInfinityPostsDone = true;
      state.InfinityPosts = _concat(state.InfinityPosts, action.payload);
      state.hasMorePosts = action.payload.length === 8;
    },
    [loadPostsInfinity.rejected]: (state, action) => {
      state.loadInfinityPostsLoading = false;
      state.loadInfinityPostsError = action.error.message;
    },
    // 인피니티 스크롤 LikePlace
    [loadPostsInfinityLikePlace.pending]: (state) => {
      state.loadInfinityPostsLikePlaceLoading = true;
      state.loadInfinityPostsLikePlaceDone = false;
      state.loadInfinityPostsLikePlaceError = null;
    },
    [loadPostsInfinityLikePlace.fulfilled]: (state, action) => {
      state.loadInfinityPostsLikePlaceLoading = false;
      state.loadInfinityPostsLikePlaceDone = true;
      state.InfinityPostsLikePlace = _concat(
        state.InfinityPostsLikePlace,
        action.payload
      );
      state.hasMoreLikePlace = action.payload.length === 8;
    },
    [loadPostsInfinityLikePlace.rejected]: (state, action) => {
      state.loadInfinityPostsLikePlaceLoading = false;
      state.loadInfinityPostsLikePlaceError = action.error.message;
    },
    // 유저 정보 조회
    [loadUser.pending]: (state) => {
      state.loadUserLoading = true;
      state.loadUserDone = false;
      state.loadUserError = null;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.loadUserLoading = false;
      state.loadUserDone = true;
      state.user = action.payload.data; // 서버에서 온 user 정보가 담긴다.
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
      state.followerUsers = action.payload.data;
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
      state.followeeUsers = action.payload.data;
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
    [follow.fulfilled]: (state) => {
      state.followLoading = false;
      state.followDone = true;
      // state.FollowInfo.FollowingsList.push({
      //   id: action.payload.id,
      // });
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
    [follow.fulfilled]: (state) => {
      state.followLoading = false;
      state.followDone = true;
      // _remove(state.FollowInfo.FollowinsList, {
      //   id: action.payload.id,
      // });
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
      console.log(action.payload.data.data.inquiryDtoList);
      state.mainPosts = action.payload.data.data.inquiryDtoList;
      // state.mainPosts = _concat(
      //   state.mainPosts,
      //   createData(
      //     action.payload.question_seq,
      //     action.payload.question_title,
      //     action.payload.question_date
      //   )
      // );
    },
    [loadBoardList.rejected]: (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsError = action.error.message;
    },
    // 문의 게시판 상세 정보 request
    [loadBoardListItem.pending]: (state) => {
      state.loadPostsLoading = true;
      state.loadPostsDone = false;
      state.loadPostsError = null;
    },
    [loadBoardListItem.fulfilled]: (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsDone = true;
      state.singlePost = action.payload.data.data;
      console.log(action.payload.data.data);
    },
    [loadBoardListItem.rejected]: (state, action) => {
      state.loadPostsLoading = false;
      state.loadPostsError = action.error.message;
    },
    // 문의 게시판 글 작성 request
    [addPost.pending]: (state) => {
      state.addPostLoading = true;
      state.addPostDone = false;
      state.addPostError = null;
    },
    [addPost.fulfilled]: (state) => {
      state.addPostLoading = false;
      state.addPostDone = true;
      // state.mainPosts.unshift(action.payload);
    },
    [addPost.rejected]: (state, action) => {
      state.addPostLoading = false;
      state.addPostError = action.error.message;
    },
    // 문의 게시판 글 삭제 request
    [removePost.pending]: (state) => {
      state.removeAnswerLoading = true;
      state.removeAnswerDone = false;
      state.removeAnswerError = null;
    },
    [removePost.fulfilled]: (state) => {
      state.removeAnswerLoading = false;
      state.removeAnswerDone = true;
    },
    [removePost.rejected]: (state, action) => {
      state.removeAnswerLoading = false;
      state.removeAnswerError = action.error.message;
    },
    // 문의 게시판 글 수정 request
    [updatePost.pending]: (state) => {
      state.updatePostLoading = true;
      state.updatePostDone = false;
      state.updatePostError = null;
    },
    [updatePost.fulfilled]: (state) => {
      // const post = _find(state.mainPosts, {
      //   questionSeq: action.payload.questionSeq,
      // });
      // console.log(post);
      state.updatePostLoading = false;
      state.updatePostDone = true;
      // {content : content} 이런식으로 dispatch 보낼 예정
      // post.question_content = action.payload.content;
    },
    [updatePost.rejected]: (state, action) => {
      state.updatePostLoading = true;
      state.updatePostError = action.error.message;
    },

    // 문의 게시판 답변 글 작성 request
    [addAnswer.pending]: (state) => {
      state.addAnswerLoading = true;
      state.addAnswerDone = false;
      state.addAnswerError = null;
    },
    [addAnswer.fulfilled]: (state) => {
      // const post = _find(state.mainPosts, { id: action.payload.questionSeq });
      state.addAnswerLoading = false;
      state.addAnswerDone = true;
      // 답변은 하나만 달리므로!
      // post.answer = action.payload;
    },
    [addAnswer.rejected]: (state, action) => {
      state.addAnswerLoading = false;
      state.addAnswerError = action.error.message;
    },

    // 문의 게시판 답변 글 삭제 request
    [removeAnswer.pending]: (state) => {
      state.removeAnswerLoading = true;
      state.removeAnswerDone = false;
      state.removeAnswerError = null;
    },
    [removeAnswer.fulfilled]: (state) => {
      // const post = _find(state.mainPosts, { id: action.payload.PostId });
      state.removeAnswerLoading = false;
      state.removeAnswerDone = true;
      // _remove(post.answer, { id: action.payload.AnswerId });
    },
    [removeAnswer.rejected]: (state, action) => {
      state.removeAnswerLoading = false;
      state.removeAnswerError = action.error.message;
    },
    // 문의 게시판 답변 글 수정 request, 답변이 하나면 글 작성 로직이랑 같아짐
    [updateAnswer.pending]: (state) => {
      state.updateAnswerLoading = true;
      state.updateAnswerDone = false;
      state.updateAnswerError = null;
    },
    [updateAnswer.fulfilled]: (state) => {
      // const post = _find(state.mainPosts, { id: action.payload.PostId });
      state.updateAnswerLoading = false;
      state.updateAnswerDone = true;
      // {answer : answer }이 방식으로 dispatch 보낼 예정
      // post.answer = action.payload.answer;
    },
    [updateAnswer.rejected]: (state, action) => {
      state.updateAnswerLoading = false;
      state.updateAnswerError = action.error.message;
    },
  },
});
export const { postIdToListItem, UserIdToListItem, followinfoToList } =
  MyPageSlice.actions;
export default MyPageSlice.reducer;

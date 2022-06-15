/* eslint-disable no-self-assign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _concat from 'lodash/concat';
import shortId from 'shortid';
import axios from '../../common/api/httpCommunication';

// test for 인피니티
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
      storeSeq: Math.floor(Math.random() * 100000),
      storeName: '장소 이름',
      addressName: '서울시 서대문구 장천동 53-20 ',
      categoryName: '오코노미야끼 전문식당',
    }));

// 인피니티 스크롤 for 찜한 나들 코스

export const loadPostsInfinityLikeNadle = createAsyncThunk(
  'mypage/loadPostsInfinityLikeNadle',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/curations/bookmarks/${data.myPageId}?page=${data.likeNadlepage}&size=${data.size}`
      );
      return response;
    } catch (err) {
      return rejectWithValue(err.resonse.data);
    }
  }
);

// 인피니티 스크롤 for 찜한 장소
export const loadPostsInfinityLikePlace = createAsyncThunk(
  'mypage/loadPostsInfinityLikePlace',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/stores/bookmarks/${data.myPageId}?page=${data.likePlacepage}&size=${data.size}`
      );
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// 인피니티 스크롤 for 내 나들 코스

export const loadPostsInfinityMyNadle = createAsyncThunk(
  'mypage/loadPostsInfinityMyNadle',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/curations/${data.myPageId}?page=${data.myNadlepage}&size=${data.size}`
      );
      return response;
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

// 찜한장소 생성페이지로 보내기
export const setLikePlaceBasket = createAsyncThunk(
  'mypage/setLikePlaceBasket',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post('/auth/stores/bookmarks/courses', data);
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

// 내 팔로잉 목록 조회
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

// 현재 접근한 페이지 유저 팔로잉 목록 조회
export const anotherLoadFollowings = createAsyncThunk(
  'mypage/anotherLoadFollowings',
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
      const response = await axios.post(`/auth/mypage/${data}/follow`);
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
      const response = await axios.delete(`/auth/mypage/${data}/unfollow`);
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
      const response = await axios.get(`/auth/inquiries/questions/`);
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
        `/auth/inquiries/questions/${data.questionSeq}`
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
      const response = await axios.post('/auth/inquiries/questions', data);
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
        `/auth/inquiries/questions/${data.questionSeq}`,
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
      const response = await axios.delete(`/auth/inquiries/questions/${data}`);
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
      const response = await axios.post('/auth/inquiries/answers', data);
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
      const response = await axios.put(`/auth/inquiries/answers`, data);
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
      const response = await axios.delete(`/auth/inquiries/answers/${data}`);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 기본 state
// 서버 연결하면 기존의 dummydate 연결 풀어야 함
export const initialState = {
  user: null,
  count: 0,
  followinfoToList: null,
  LikeNadles: [], // infinity scroll LikeNadle
  MyNadles: [], // infinity scroll MyNadles
  LikePlaces: [], // infinity scroll LikePlaces
  InfinityPostsLikePlace: [], // infinity scroll LikePlace
  hasMoreLikePlace: true,
  followeeUsers: null,
  anotherFolloweeUsers: null, // 다른 유저의 팔로잉 정보
  followerUsers: null,
  mainPosts: [], // 문의게시판 목록
  singlePost: null, // 문의 게시판 상세 정보
  PostId: null, // 문의게시판 postId
  UserId: null, // 문의게시판 UserId
  myCourse: [], // 장바구니
  isChanged: false,
  paramsId: null,
  pageCount: 0,
  myCourseToCreate: null,
  loadInfinityLikePlacesLoading: false, // 인피니티 LikePlace,
  loadInfinityLikePlacesDone: false,
  loadInfinityLikePlacesError: null,
  loadInfinityMyNadlesLoading: false, // 인피니티 내 나들코스
  loadInfinityMyNadlesDone: false,
  loadInfinityMyNadlesError: null,
  loadInfinityLikeNadlesLoading: false, // 인피니티 찜한 나들 코스
  loadInfinityLikeNadlesDone: false,
  loadInfinityLikeNadlesError: null,
  setLikePlaceLoading: false, // 장바구니 담기 요청 시도
  setLikePlaceDone: false,
  setLikePlaceError: null,
  loadUserLoading: false, // mypage 유저 정보 조회 시도
  loadUserDone: false,
  loadUserError: null,
  loadFollowingsLoading: false, // 팔로잉 목록 조회 시도
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadAnotherFollowingsLoading: false, // 현재 접근한 팔로잉 유저 팔로잉 목록 조회 시도
  loadAnotherFollowingsDone: false,
  loadAnotherFollowingsError: null,
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
    setMyCourse(state, action) {
      state.myCourse.push(action.payload);
    },
    deleteMyCourse(state, action) {
      state.myCourse = state.myCourse.filter((v) => v !== action.payload);
    },
    changedMypage(state) {
      state.isChanged;
    },
    getParamsId(state, action) {
      state.paramsId = action.payload;
    },
    getPageCount(state, action) {
      state.pageCount = action.payload;
    },
    clearLikePlaces(state) {
      state.LikePlaces = [];
    },
    clearLikeNadles(state) {
      state.LikeNadles = [];
    },
    claerMyNadles(state) {
      state.MyNadles = [];
    },
  },
  extraReducers: {
    // 인피니티 스크롤 LikeNadles
    [loadPostsInfinityLikeNadle.pending]: (state) => {
      state.loadInfinityLikeNadlesLoading = true;
      state.loadInfinityLikeNadlesDone = false;
      state.loadInfinityLikeNadlesError = null;
    },
    [loadPostsInfinityLikeNadle.fulfilled]: (state, action) => {
      state.loadInfinityLikeNadlesLoading = false;
      state.loadInfinityLikeNadlesDone = true;
      state.LikeNadles = _concat(
        state.LikeNadles,
        action.payload.data.data.content
      );
      // if (state.count === 0) {
      //   state.LikeNadles = [];
      // }
      // state.loadInfinityLikeNadlesDone = true;
      // state.LikeNadles = action.payload.data.data.content.concat(
      //   state.LikeNadles
      // );
      // state.LikeNadles = state.LikeNadles.filter(
      //   (value, index, self) =>
      //     index === self.findIndex((t) => t.curationSeq === value.curationSeq)
      // );
    },
    [loadPostsInfinityLikeNadle.rejected]: (state, action) => {
      state.loadInfinityLikeNadlesLoading = false;
      state.loadInfinityLikeNadlesError = action.error.message;
    },
    // 인피니티 스크롤 LikePlaces
    [loadPostsInfinityLikePlace.pending]: (state) => {
      state.loadInfinityLikePlacesLoading = true;
      state.loadInfinityLikePlacesDone = false;
      state.loadInfinityLikePlacesError = null;
    },
    [loadPostsInfinityLikePlace.fulfilled]: (state, action) => {
      state.loadInfinityLikePlacesLoading = false;
      state.loadInfinityLikePlacesDone = true;
      state.LikePlaces = _concat(
        state.LikePlaces,
        action.payload.data.data.content
      );
    },
    [loadPostsInfinityLikePlace.rejected]: (state, action) => {
      state.loadInfinityLikePlacesLoading = false;
      state.loadInfinityLikePlacesError = action.error.message;
    },
    // 인피니티 스크롤 MyNadles
    [loadPostsInfinityMyNadle.pending]: (state) => {
      state.loadInfinityMyNadlesLoading = true;
      state.loadInfinityMyNadlesDone = false;
      state.loadInfinityMyNadlesError = null;
    },
    [loadPostsInfinityMyNadle.fulfilled]: (state, action) => {
      state.loadInfinityMyNadlesLoading = false;
      state.MyNadles = _concat(
        state.MyNadles,
        action.payload.data.data.content
      );
      // state.MyNadles = action.payload.data.data.content.concat(state.MyNadles);
      // state.MyNadles = state.MyNadles.filter(
      //   (value, index, self) =>
      //     index === self.findIndex((t) => t.curationSeq === value.curationSeq)
      // );
      state.loadInfinityMyNadlesDone = true;
    },
    [loadPostsInfinityMyNadle.rejected]: (state, action) => {
      state.loadInfinityMyNadlesLoading = false;
      state.loadInfinityMyNadlesError = action.error.message;
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
    // 장바구니
    [setLikePlaceBasket.pending]: (state) => {
      state.setLikePlaceLoading = true;
      state.setLikePlaceDone = false;
      state.setLikePlaceError = null;
    },
    [setLikePlaceBasket.fulfilled]: (state, action) => {
      state.setLikePlaceLoading = false;
      state.setLikePlaceDone = true;
      state.myCourseToCreate = action.payload.data; // 서버에서 온 courese정보가 담긴다.
    },
    [setLikePlaceBasket.rejected]: (state, action) => {
      state.setLikePlaceLoading = false;
      state.setLikePlaceError = action.error.message;
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
    // 현재 접근한 팔로잉 유저 정보 조회
    [anotherLoadFollowings.pending]: (state) => {
      state.loadAnotherFollowingsLoading = true;
      state.loadAnotherFollowingsDone = false;
      state.loadAnotherFollowingsError = null;
    },
    [anotherLoadFollowings.fulfilled]: (state, action) => {
      state.loadAnotherFollowingsLoading = false;
      state.anotherFolloweeUsers = action.payload.data;
      state.loadAnotherFollowingsDone = true;
    },
    [anotherLoadFollowings.rejected]: (state, action) => {
      state.loadAnotherFollowingsLoading = true;
      state.loadAnotherFollowingsError = action.error.message;
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
export const {
  postIdToListItem,
  UserIdToListItem,
  followinfoToList,
  setMyCourse,
  deleteMyCourse,
  changedMypage,
  getParamsId,
  getPageCount,
  clearLikePlaces,
  clearLikeNadles,
  claerMyNadles,
} = MyPageSlice.actions;
export default MyPageSlice.reducer;

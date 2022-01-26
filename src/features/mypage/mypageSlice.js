import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import _remove from 'lodash/remove';

// dummy data for header 비동기 통신 2번 하는 것을 가정
export const User = {
  meanstrike: {
    nickname: 'meanstrike',
    id: 1,
    Followings: 2,
    Followers: 3,
  },
  taw1019: {
    nickname: 'taw1019',
    id: 2,
    Followings: 5,
    Followers: 6,
  },
};

export const FollowList = {
  meanstrike: {
    FollowingsList: [
      { nickname: 'han', id: '2' },
      { nickname: 'kim', id: '3' },
      { nickname: 'nam', id: '5' },
    ],
  },
  taw1019: {
    FollowingsList: [
      { nickname: 'han', id: '2' },
      { nickname: 'kim', id: '3' },
    ],
    FollowersList: [
      { nickname: 'heyhey!', id: '6' },
      { nickname: 'yoo', id: '4' },
      { nickname: 'nam', id: '5' },
    ],
  },
};

export const nadleCoures = {};

// 내 나들코스, 찜한 나들 코스, 찜한 장소 더미 데이터 만들기

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

// 기본 state

export const initialState = {
  userInfo: User, // 내 정보 => 추후 서버가 보낸 data 담김
  FollowInfo: FollowList, // 팔로잉, 팔로워 정보 => 추후 서버가 보낸 data 담김
  loadUserLoading: false, // mypage haeder 정보 조회
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
      state.loadUserError = action.payload;
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
      state.loadFollowersError = action.payload;
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
      state.loadFollowingsError = action.payload;
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
        nickname: action.payload.nickname,
        id: action.payload.id,
      });
    },
    [follow.rejected]: (state, action) => {
      state.followLoading = false;
      state.followError = action.payload;
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
        nickname: action.payload.nickname,
        id: action.payload.id,
      });
    },
    [follow.rejected]: (state, action) => {
      state.followLoading = false;
      state.followError = action.payload;
    },
  },
});
export default mypageSlice.reducer;

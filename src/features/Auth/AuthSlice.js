import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../common/api/httpCommunication';
import {
  deleteToken,
  deleteLoginSuccess,
  deleteUserInfo,
} from '../../common/api/JWT-Token';

axios.defaults.withCredentials = true;

// 기본 state
export const initialState = {
  email: '',
  nickname: '',
  emoji: '',
  signupLoading: false, // 회원가입 요청 시도
  signupDone: false,
  signupError: null,
  logoutLoading: false, // 로그아웃 요청 시도
  logoutDone: false,
  logoutError: null,
  checkNicknameLoading: false, // 닉네임 중복검사 요청 시도
  checkNicknameDone: false,
  checkNicknameError: null,
};

// 회원가입
export const signup = createAsyncThunk(
  'member/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', data);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// 자동 로그인 연장 (함수명, url 바뀔 수 있음)
// export const silentRefresh = createAsyncThunk(
//   'member/refresh',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/users/refresh', data);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// 로그아웃
export const logout = createAsyncThunk(
  'member/logout',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users/signout');
      // const response = '로그아웃 성공';
      console.log('로그아웃 시도');
      deleteToken();
      deleteLoginSuccess();
      deleteUserInfo();
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// 닉네임 중복 검사

export const checkNickname = createAsyncThunk(
  'member/checkNickname',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post('/users/nickname', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [signup.pending]: (state) => {
      state.signupLoading = true;
      state.signupDone = false;
      state.signupError = null;
    },
    [signup.fulfilled]: (state) => {
      state.signupLoading = false;
      state.signupDone = true;
      state.signupError = null;
    },
    [signup.rejected]: (state, action) => {
      state.signupLoading = false;
      state.signupDone = false;
      state.signupError = action.error.message;
    },
    [logout.pending]: (state) => {
      state.logoutLoading = true;
      state.logoutDone = false;
      state.logoutError = null;
    },
    [logout.fulfilled]: (state) => {
      state.logoutLoading = false;
      state.logoutDone = true;
      state.logoutError = null;
    },
    [logout.rejected]: (state, action) => {
      state.logoutLoading = false;
      state.logoutDone = false;
      state.logoutError = action.error.message;
    },
    [checkNickname.pending]: (state) => {
      state.checkNicknameLoading = true;
      state.checkNicknameDone = false;
      state.checkNicknameError = null;
    },
    [checkNickname.fulfilled]: (state) => {
      state.checkNicknameLoading = false;
      state.checkNicknameDone = true;
      state.checkNicknameError = null;
    },
    [checkNickname.rejected]: (state, action) => {
      state.checkNicknameLoading = false;
      state.checkNicknameDone = false;
      state.checkNicknameError = action.error.message;
    },
  },
});

export default authSlice.reducer;

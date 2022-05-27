import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../common/api/httpCommunication';
import {
  deleteToken,
  deleteLoginSuccess,
  deleteUserInfo,
  getUserInfo,
} from '../../common/api/JWT-Token';

axios.defaults.withCredentials = true;

// 기본 state

export const initialState = {
  email: '',
  nickname: '',
  emoji: '',
  accessCode: '',
  clientId: '',
  scope: '',
  googleLoginLoading: false, // 구글로그인 redirect 페이지 요청 시도
  googleLoginDone: false,
  googleLoginError: null,
  signupLoading: false, // 회원가입 요청 시도
  signupDone: false,
  signupError: null,
  logoutLoading: false, // 로그아웃 요청 시도
  logoutDone: false,
  logoutError: null,
  checkNicknameLoading: false, // 닉네임 중복검사 요청 시도
  checkNicknameDone: false,
  checkNicknameError: null,
  editUserInfoLoading: false, // 회원정보 수정 요청
  editUserInfoDone: false,
  editUserInfoError: null,
};

// google login 정보 받기
export const googleLogin = createAsyncThunk(
  'member/googleLogin',
  async (data, { rejectWithValue }) => {
    console.log('안됨');
    try {
      const response = await axios.get('auth/users/google');
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response);
    }
  }
);

// 회원가입
export const signup = createAsyncThunk(
  'member/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('auth/users/signup', data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// 회원정보 수정

export const editUserInfo = createAsyncThunk(
  'member/editUserInfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `auth/users/${getUserInfo().userSeq}`,
        data
      );
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// 로그아웃

export const logout = createAsyncThunk(
  'member/logout',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('auth/users/signout');
      // const response = '로그아웃';
      console.log(response);
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
      const response = await axios.post('auth/users/nickname', data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [googleLogin.pending]: (state) => {
      state.googleLoginLoading = true;
      state.googleLoginDone = false;
      state.googleLoginError = null;
    },
    [googleLogin.fulfilled]: (state, action) => {
      state.googleLoginLoading = false;
      state.googleLoginDone = true;
      state.googleLoginError = null;
      state.clientId = action.payload.clientId;
      state.scope = action.payload.scope;
    },
    [googleLogin.pending]: (state, action) => {
      state.googleLoginLoading = false;
      state.googleLoginDone = false;
      state.googleLoginError = action.error.message;
    },
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
      state.checkNicknameError = action.payload;
    },
    [editUserInfo.pending]: (state) => {
      state.editUserInfoLoading = true;
      state.editUserInfoDone = false;
      state.editUserInfoError = null;
    },
    [editUserInfo.fulfilled]: (state) => {
      state.editUserInfoLoading = false;
      state.editUserInfoDone = true;
      state.editUserInfoError = null;
    },
    [editUserInfo.rejected]: (state, action) => {
      state.editUserInfoLoading = false;
      state.editUserInfoDone = false;
      state.editUserInfoError = action.error.message;
    },
  },
});

export default authSlice.reducer;

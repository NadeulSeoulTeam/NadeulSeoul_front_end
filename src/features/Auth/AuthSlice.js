import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;

// 기본 state
export const initialState = {
  nickname: '',
  emoji: '',
  signupError: '',
  isSignedin: '',
  signinError: '',
};

export const signup = createAsyncThunk(
  'member/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/member/signup', data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// 자동 로그인 연장 (함수명, url 바뀔 수 있음)
export const silentRefresh = createAsyncThunk(
  'member/refresh',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/member/refresh', data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// index.js 에서 해줘야 할지도
// export const onLoginSuccess = createAsyncThunk(
//   'member/signin',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.defaults.headers.common['Authorization']
//     }
//   }
//   );

// 이게 필요한가? security로 로그인 시키면 redirect만 main으로 하면 됨
// export const signin = createAsyncThunk(
//   'member/signin',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/member/signin', data, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    // addNaverToken(state, action) {
    //   state.naverToken = action.payload;
    // },
    // addNaverCode(state, action) {
    //   state.naverCode = action.payload;
    // },
    // onChangeNaverCode(state, action) {
    //   state.isNaverCode = action.payload;
    // },
    // addGoogleCode(state, action) {
    //   state.googleCode = action.payload;
    // },
    // onChangeGoogleCode(state, action) {
    //   state.isGoogleCode = action.payload;
    // },
  },
  extraReducers: {
    // [postNaverCode.pending]: (state) => {
    //   state.postNaverCodeLoading = true;
    //   state.postNaverCodeDone = false;
    //   state.postNaverCodeError = false;
    // },
    // [postNaverCode.fulfilled]: (state) => {
    //   state.postNaverCodeLoading = false;
    //   state.postNaverCodeDone = true;
    // },
    // [postNaverCode.rejected]: (state, action) => {
    //   state.postNaverCodeLoading = false;
    //   state.postNaverCodeError = action.payload;
    // },
    [signup.rejected]: (state, action) => {
      state.signupError = action.payload;
    },
    // [signup.fulfilled]: (state, action) => {
    // },
    // },
  },
});
// export const {} = authSlice.actions;

export default authSlice.reducer;

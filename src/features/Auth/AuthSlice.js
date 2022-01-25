import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// data에는 인가 code가 담긴다.
export const postNaverCode = createAsyncThunk(
  'auth/postNaverCode',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('벡엔드 주소', data);
      // saveToken => 유니버셜 쿠키 라이브러리
      console.log(response.data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postGoogleCode = createAsyncThunk(
  'auth/postGoogleCode',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('벡엔드 주소', data);
      // saveToken => 유니버셜 쿠키 라이브러리
      console.log(response.data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 기본 state
export const initialState = {
  naverToken: '',
  isNaverCode: false,
  naverCode: '',
  postNaverCodeLoading: false, // naver 인가 코드 post 시도중
  postNaverCodeDone: false,
  postNaverCodeError: false,
  googleCode: '',
  isGoogleCode: false,
  postGoogleCodeLoading: false, // google 인가 코드 post 시도중
  postGoogleCodeDone: false,
  postGoogleCodeError: false,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    addNaverToken(state, action) {
      state.naverToken = action.payload;
    },
    addNaverCode(state, action) {
      state.naverCode = action.payload;
    },
    onChangeNaverCode(state, action) {
      state.isNaverCode = action.payload;
    },
    addGoogleCode(state, action) {
      state.googleCode = action.payload;
    },
    onChangeGoogleCode(state, action) {
      state.isGoogleCode = action.payload;
    },
  },
  extraReducers: {
    [postNaverCode.pending]: (state) => {
      state.postNaverCodeLoading = true;
      state.postNaverCodeDone = false;
      state.postNaverCodeError = false;
    },
    [postNaverCode.fulfilled]: (state) => {
      state.postNaverCodeLoading = false;
      state.postNaverCodeDone = true;
    },
    [postNaverCode.rejected]: (state, action) => {
      state.postNaverCodeLoading = false;
      state.postNaverCodeError = action.payload;
    },
    [postGoogleCode.pending]: (state) => {
      state.postGoogleCodeLoading = true;
      state.postGoogleCodeDone = false;
      state.postGoogleCodeError = false;
    },
    [postGoogleCode.fulfilled]: (state) => {
      state.postGoogleCodeLoading = false;
      state.postGoogleCodeDone = true;
    },
    [postGoogleCode.rejected]: (state, action) => {
      state.postGoogleCodeLoading = false;
      state.postGoogleCodeError = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(postNaverCode.pending, (state) => {
  //     state.postNaverCodeLoading = true;
  //     state.postNaverCodeDone = false;
  //     state.postNaverCodeError = false;
  //   });
  //   builder.addCase(postNaverCode.fulfilled, (state) => {
  //     state.postNaverCodeLoading = false;
  //     state.postNaverCodeDone = true;
  //   });
  //   builder.addCase(postNaverCode.rejected, (state, action) => {
  //     state.postNaverCodeLoading = false;
  //     state.postNaverCodeError = action.payload;
  //   });
  // },
});
export const {
  addNaverToken,
  addNaverCode,
  onChangeNaverCode,
  addGoogleCode,
  onChangeGoogleCode,
} = authSlice.actions;

export default authSlice.reducer;

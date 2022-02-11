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
  reducers: {},
  extraReducers: {},
});
// export const {} = authSlice.actions;

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// data에는 인가 code가 담긴다.
export const PostNaverCode = createAsyncThunk(
  'POST_NAVERCODE', // convention 'postNaverCode'
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
  postNaverCodeLoading: false, // naver 인가 코드 post 시도중
  postNaverCodeDone: false,
  postNaverCodeError: false,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PostNaverCode.pending, (state) => {
      state.postNaverCodeLoading = true;
      state.postNaverCodeDone = false;
      state.postNaverCodeError = false;
    });
    builder.addCase(PostNaverCode.fulfilled, (state) => {
      state.postNaverCodeLoading = false;
      state.postNaverCodeDone = true;
    });
    builder.addCase(PostNaverCode.rejected, (state, action) => {
      state.postNaverCodeLoading = false;
      state.postNaverCodeError = action.payload;
    });
  },
});

export default authSlice.reducer;

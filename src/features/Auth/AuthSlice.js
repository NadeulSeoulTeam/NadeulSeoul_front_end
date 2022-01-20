import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const requestNaverCode = createAsyncThunk(
  'REQUEST',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://httpbin.org/get');
      console.log(response.data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 기본 state
export const initialState = {
  naverCode: null,
  LoginNaverCodeLoading: false,
  LoginNaverCodeDone: false,
  LoginNaverCodeError: false,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestNaverCode.pending, (state) => {
      state.LoginNaverCodeLoading = true;
    });
    // [requestNaverCode.fulfilled]: (state) => {
    //   state.LoginNaverCodeLoading = true;
    // },
  },

  // extraReducers: (builder) =>
  //   builder
  //     .addCase(requestNaverCode.pending, (state) => {
  //       state.LoginNaverCodeLoading = true;
  //       state.LoginNaverCodeDone = false;
  //       state.LoginNaverCodeError = null;
  //     })
  //     .addCase(requestNaverCode.fulfilled, (state) => {
  //       state.LoginNaverCodeLoading = false;
  //       state.LoginNaverCodeDone = true;
  //     })
  //     .addCase(requestNaverCode.rejectetd, (state) => {
  //       state.LoginNaverCodeLoading = false;
  //     })
  //     .addDefaultCase((state) => state),
});

export default authSlice.reducer;
//         'https://nid.naver.com/oauth2.0/authorize?client_id=m7ElqUoPxOdxQ1WacsCU&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=AAAAOoObjtSBmB9vtukF3w0BC7BYZ4vId2kOSCBSDcxmov_DtjY3u8ATb9I3L-pdJisk9KulUsWrgCOmu2LKDH-i6U0'

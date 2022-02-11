import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import Cookies from 'universal-cookie';
import axios from '../../common/api/httpCommunication';
import { getToken } from '../../common/api/JWT-Token';

axios.defaults.withCredentials = true;

// 기본 state
export const initialState = {
  email: '',
  token: '',
  nickname: '',
  emoji: '',
  signupLoading: false,
  signupDone: false,
  signupError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
};

export const signup = createAsyncThunk(
  'member/signup',
  async (data, { rejectWithValue }) => {
    try {
      console.log(getToken());
      // const cookies = new Cookies();
      // cookies.set('token', '지윤', { path: '/' });
      // console.log(cookies.get('token'));
      const response = await axios.post(
        '/member/signup',
        data
        // headers: {
        //   Authorization: `Bearer ${getToken()}`,
        // },
      );
      return response;
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

// 로그인 완료(메인페이지로 넘어감)되면 cookie에서 token 가져와야됨
// 아래 코드 useEffect로 메인페이지에 추가
// const refreshToken = cookies.get('refresh_token');

// export const setRefreshTokenToCookie = (refreshToken) => {
//   cookies.set('refresh_token', refreshToken, { sameSite: 'strict' });
// };

// export const logout = () => {
//   console.log('logout');
//   window.localStorage.setItem('logout', Date.now());
//   cookies.remove('refresh_token');
// };

// index.js 에서 해줘야 할지도
// export const onLogin = createAsyncThunk(
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
    // gobackToInquery(state, action) {
    //   state.inqueryBack = action.payload;
    // },
    saveRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
  },
  extraReducers: {
    [signup.pending]: (state) => {
      state.signupLoading = true;
      state.signupDone = false;
      state.signupError = null;
    },
    [signup.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.signupLoading = false;
      state.signupDone = true;
      state.signupError = null;
    },
    [signup.rejected]: (state, action) => {
      state.signupLoading = false;
      state.signupDone = false;
      state.signupError = action.payload.message;
    },
  },
});
// export const {} = authSlice.actions;

export default authSlice.reducer;

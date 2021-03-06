import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../common/api/httpCommunication';

// save Cookie
import { saveUserInfo } from '../../common/api/JWT-Token';

export const initialState = {
  courses: [
    { curation_seq: 1, title: '큐레이션 제목 길게 테스트중 으아아', likes: 39 },
    { curation_seq: 2, title: '큐레이션 제목', likes: 339 },
    { curation_seq: 3, title: '큐레이션 제목', likes: 29 },
    { curation_seq: 4, title: '큐레이션 제목', likes: 9 },
    { curation_seq: 5, title: '큐레이션 제목', likes: 9 },
    { curation_seq: 6, title: '큐레이션 제목', likes: 29 },
    { curation_seq: 7, title: '큐레이션 제목', likes: 234 },
  ],
  users: [
    { id: 1, nickname: '나들러1 이것도 길게 테스트', emoji: '🎈' },
    { id: 2, nickname: '나들러2', emoji: '🎁' },
    { id: 3, nickname: '나들러3', emoji: '🎃' },
    { id: 4, nickname: '나들러4', emoji: '✨' },
    { id: 5, nickname: '나들러5', emoji: '🥽' },
    { id: 6, nickname: '나들러6', emoji: '🧶' },
  ],
  stores: [
    {
      store_seq: 1,
      name: '장소1',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 2,
      name: '장소2',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 3,
      name: '장소3',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 4,
      name: '장소4',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
    {
      store_seq: 5,
      name: '장소5',
      address: '서울특별시 서대문구 창천동 53-20',
      category_name: '가정,생활 > 복합쇼핑몰',
    },
  ],
  hotStore: undefined,
  selectedCourse: {},
  userInfo: null, // 로그인한 사용자 정보
  fetchCoursesLoading: false,
  fetchCoursesDone: false,
  fetchCoursesError: null,
  LoadUserInfoLoading: false, // 사용자 정보 요청 시도
  LoadUserInfoDone: false,
  LoadUserInfoError: null,
  fetchHotStoresLoading: false, // 핫한 코스
  fetchHotStoreDone: false,
  fetchHotStoreError: null,
  fetchUsersLoading: false, // 열정적 나들러
  fetchUsersDone: false,
  fetchUsersError: null,
  fetchPlaceLoading: false, // 찜한 장소
  fetchPlaceDone: false,
  ffetchPlaceError: null,
  // Local tag
  localTag: [],
  fetchLocalTagsLoading: false,
  fetchLocalTagsDone: false,
  fetchLocalTagsError: null,
  // Theme tag
  themeTag: [],
  fetchThemeTagsLoading: false,
  fetchThemeTagsDone: false,
  fetchThemeTagsError: null,
  // theme&local selected
  localNThemeTagsSelected: [],
  localNThemeTagsSelectedLoading: false,
  localNThemeTagsSelectedDone: false,
  localNThemeTagsSelectedError: null,
};

// hot 한 코스 목록 가져오기
export const fetchCourses = createAsyncThunk('main/fetchCourses', async () => {
  try {
    const response = await axios.get('statics/courses');
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
});
// 활발한 나들러 받아오는 주소 확인
export const fetchUsers = createAsyncThunk('main/nadeulers', async () => {
  try {
    const response = await axios.get('statics/nadeulers');
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
});

// 찜 순위로 가져오기
export const fetchHotStores = createAsyncThunk(
  'main/fetchHotStores',
  async () => {
    try {
      const response = await axios.get('statics/stores');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

// 유저 정보 확인
export const LoadUserInfo = createAsyncThunk(
  'main/LoadUserInfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('auth/users');
      saveUserInfo(response.data.data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 지역 tag list 가져오기
export const fetchLocalTags = createAsyncThunk(
  'main/fetchLocalTags',
  async () => {
    try {
      const response = await axios.get('tags/local');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
// 테마 tag list 가져오기
export const fetchThemeTags = createAsyncThunk(
  'main/fetchThemeTags',
  async () => {
    try {
      const response = await axios.get('tags/theme');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
// 지역 & 테마 선택 가져오기
export const LocalNThemeTagsSelected = createAsyncThunk(
  'main/localNThemeTagsSelected',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `tags/search?page=${0}&size=${30}&sort=${data.sort}`,
        data.data
      );
      console.log(response.data, '!@#!@#!@#@!#');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const mainSlice = createSlice({
  name: 'mainReducer',
  initialState,
  reducers: {
    select: (state, action) => {
      console.log('select');
      // state.selectedCourse = state.courses.find(
      //   (course) => course.id === action.id
      // );
      state.selectedCourse = action.payload;
      console.log(state.selectedCourse);
    },
  },
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.fetchCoursesLoading = true;
      state.fetchCoursesDone = false;
      state.fetchCoursesError = null;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.fetchCoursesLoading = false;
      state.fetchCoursesDone = true;
      state.courses = action.payload;
    },
    [fetchCourses.rejected]: (state, action) => {
      state.fetchCoursesLoading = true;
      state.fetchCoursesDone = false;
      state.fetchCoursesError = action.payload.data.message;
    },
    [fetchUsers.pending]: (state) => {
      state.fetchUsersLoading = true;
      state.fetchUsersDone = false;
      state.fetchUsersError = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.fetchUsersLoading = false;
      state.fetchUsersDone = true;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.fetchUsersLoading = true;
      state.fetchUsersDone = false;
      state.fetchUsersError = action.payload.data.message;
    },
    [fetchHotStores.pending]: (state) => {
      state.fetchHotStoreLoading = true;
      state.fetchHotStoreDone = false;
      state.fetchUsersError = null;
    },
    [fetchHotStores.fulfilled]: (state, action) => {
      state.fetchHotStoreLoading = false;
      state.fetchHotStoreDone = true;
      state.hotStore = action.payload;
    },
    [fetchHotStores.rejected]: (state, action) => {
      state.fetchHotStoresLoading = true;
      state.fetchHotStoreDone = false;
      state.fetchHotStoreError = action.payload.data.message;
    },
    [LoadUserInfo.pending]: (state) => {
      state.LoadUserInfoLoading = true;
      state.LoadUserInfoDone = false;
      state.LoadUserInfoError = null;
    },
    [LoadUserInfo.fulfilled]: (state, action) => {
      state.LoadUserInfoLoading = false;
      state.LoadUserInfoDone = true;
      state.userInfo = action.payload.data;
    },
    [LoadUserInfo.rejected]: (state, action) => {
      state.LoadUserInfoLoading = true;
      state.LoadUserInfoDone = false;
      state.LoadUserInfoError = action.error.message;
    },
    [fetchLocalTags.pending]: (state) => {
      state.fetchLocalTagsLoading = true;
      state.fetchLocalTagsDone = false;
      state.fetchLocalTagsError = null;
    },
    [fetchLocalTags.fulfilled]: (state, action) => {
      state.fetchLocalTagsLoading = false;
      state.fetchLocalTagsDone = true;
      state.localTag = action.payload.data;
      console.log(action.payload.data);
    },
    [fetchLocalTags.rejected]: (state, action) => {
      state.fetchLocalTagsLoading = true;
      state.fetchLocalTagsDone = false;
      state.fetchLocalTagsError = action.payload.data.message;
    },
    [fetchThemeTags.pending]: (state) => {
      state.fetchThemeTagsLoading = true;
      state.fetchThemeTagsDone = false;
      state.fetchThemeTagsError = null;
    },
    [fetchThemeTags.fulfilled]: (state, action) => {
      state.fetchThemeTagsLoading = false;
      state.fetchThemeTagsDone = true;
      state.themeTag = action.payload.data;
      console.log(action.payload.data);
    },
    [fetchThemeTags.rejected]: (state, action) => {
      state.fetchThemeTagsLoading = true;
      state.fetchThemeTagsDone = false;
      state.fetchThemeTagsError = action.payload.data.message;
    },
    [LocalNThemeTagsSelected.pending]: (state) => {
      state.localNThemeTagsSelectedLoading = true;
      state.localNThemeTagsSelectedDone = false;
      state.localNThemeTagsSelectedError = null;
    },
    [LocalNThemeTagsSelected.fulfilled]: (state, action) => {
      state.localNThemeTagsSelectedLoading = false;
      state.localNThemeTagsSelectedDone = true;
      state.localNThemeTagsSelected = action.payload.data;
      console.log(action.payload.data);
    },
    [LocalNThemeTagsSelected.rejected]: (state) => {
      state.localNThemeTagsSelectedLoading = true;
      state.localNThemeTagsSelectedDone = false;
      // state.localNThemeTagsSelectedError = action.payload.data.message;
    },
  },
});

export const { select } = mainSlice.actions;

export default mainSlice.reducer;

// export const getCourses = (state) => state.main.courses;
// export const getSelectedCourse = (state) => state.main.selectedCourse;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// style
import GlobalFonts from '../fonts/fonts';
import Container from './AppStyle';

// features
import SignIn from '../features/Auth/SignIn';
import UserForm from '../features/Auth/UserForm';
import NaverLogin from '../features/Auth/Naver/NaverLogin';
// import GoogleLogin from '../features/Auth/Google/GoogleLogin';
import NaverLoginCallback from '../features/Auth/Naver/NaverLoginCallback';
// import GoogleLoginCallback from '../features/Auth/Google/GoogleLoginCallback';
import MyPage from '../features/MyPage';
import MainPage from '../features/Main/MainPage';

// Common
import Error404 from '../common/error/Error404';
// import BasicTabs from '../features/mypage/BasicTabs';
import Course from '../features/CourseMake/Course';
import CourseCreationForm from '../features/CourseMake/CourseCreationForm';
import CourseView from '../features/CourseView';
import FollowersList from '../features/MyPage/Follow/FollowersList';
import FollowingsList from '../features/MyPage/Follow/FollowingsList';
import BoardListItem from '../features/MyPage/Board/BoardListItem';
import BoardForm from '../features/MyPage/Board/BoardForm';
import BoardList from '../features/MyPage/Board/BoardList';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <GlobalFonts />
        <Routes>
          <Route Route path="/main" element={<MainPage />} />
          {/* auth */}
          <Route path="/naverlogin" element={<NaverLogin />} />
          <Route Route path="/mypage/:id" element={<MyPage />} />
          {/* mypage */}
          <Route
            Route
            path="/mypage/:id/follower"
            element={<FollowersList />}
          />
          <Route
            Route
            path="/mypage/:id/followee"
            element={<FollowingsList />}
          />
          <Route Route path="/questions" element={<BoardList />} />
          <Route
            Route
            path="/questions/:QuestionId"
            element={<BoardListItem />}
          />
          {/* 수정 필요(문의게시판 밖으로) */}
          {/* <Route
            Route
            path="mypage/:id/BoardList/:PostId"
            element={<BoardListItem />}
          /> */}
          <Route Route path="/questions/new" element={<BoardForm />} />

          {/* login 파일 통일 필요 */}
          <Route path="/member/signin" element={<SignIn />} />
          <Route path="/member/signup" element={<UserForm />} />
          <Route
            path="/auth/naver/callback/"
            element={<NaverLoginCallback />}
          />
          {/* <Route path="/auth/google/callback" element={<GoogleLoginCallback />} /> */}
          <Route path="/Course" element={<Course />} />
          <Route path="/CourseView" element={<CourseView />} />
          <Route path="/CourseCreationForm" element={<CourseCreationForm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

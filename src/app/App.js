import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// style
import GlobalFonts from '../fonts/fonts';
import Container from './AppStyle';

// Common
import Error404 from '../common/error/Error404';
// import Nav from '../common/Nav';

// features
import SignIn from '../features/Auth/SignIn';
import UserForm from '../features/Auth/UserForm';
import MyPage from '../features/MyPage/MyPage';
import MainPage from '../features/Main/MainPage';
import Course from '../features/CourseMake/Course';
import CourseCreationForm from '../features/CourseMake/CourseCreationForm';
import CourseView from '../features/CourseView';
import FollowersList from '../features/MyPage/Follow/FollowersList';
import FollowingsList from '../features/MyPage/Follow/FollowingsList';
import BoardListItem from '../features/MyPage/Board/BoardListItem';
import BoardForm from '../features/MyPage/Board/BoardForm';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <GlobalFonts />
        <Routes>
          <Route Route path="/" element={<MainPage />} />
          <Route Route path="/mypage/:id" element={<MyPage />} />
          <Route
            Route
            path="/mypage/:id/followerslist"
            element={<FollowersList />}
          />
          <Route
            Route
            path="/mypage/:id/followingslist"
            element={<FollowingsList />}
          />
          <Route
            Route
            path="mypage/:id/BoardList/:PostId"
            element={<BoardListItem />}
          />
          <Route Route path="mypage/:id/inqury" element={<BoardForm />} />
          {/* login 파일 통일 필요 */}
          <Route path="/member/signin" element={<SignIn />} />
          <Route path="/member/signup" element={<UserForm />} />
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

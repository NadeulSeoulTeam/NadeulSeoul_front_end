import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// style
import GlobalFonts from '../fonts/fonts';
import Container from './AppStyle';

// features
import SignIn from '../features/Auth/SignIn';
import Redirect from '../features/Auth/Redirect';
import UserForm from '../features/Auth/UserForm';
import MyPage from '../features/MyPage';
import MainPage from '../features/Main/MainPage';

// Common
import Error404 from '../common/error/Error404';
import Course from '../features/CourseMake/Course';
import CourseCreationForm from '../features/CourseMake/CourseCreationForm';
import CourseView from '../features/CourseView';
import FollowersList from '../features/MyPage/Follow/FollowersList';
import FollowingsList from '../features/MyPage/Follow/FollowingsList';
import BoardListItem from '../features/MyPage/Board/BoardListItem';
import BoardForm from '../features/MyPage/Board/BoardForm';
import BoardList from '../features/MyPage/Board/BoardList';
import PrivateRoute from '../common/PrivateRoute';
import { saveFlag } from '../features/Auth/AuthSlice';
import { getLoginSuccess } from '../common/api/JWT-Token';

function App() {
  const { flag } = useSelector((state) => state.auth);

  useEffect(() => {
    if (getLoginSuccess) {
      saveFlag('false');
    }
  }, []);
  console.log(typeof flag, flag);
  return (
    <Container>
      <BrowserRouter>
        <GlobalFonts />
        <Routes>
          <Route Route path="/" element={<MainPage />} />
          {/* auth */}
          <Route path="/member/signin" element={<SignIn />} />
          <Route path="/oauth/redirect" element={<Redirect />} />
          <Route element={<PrivateRoute flag={flag} />}>
            <Route path="/member/signup" element={<UserForm />} />
          </Route>
          {/* mypage */}
          <Route Route path="/mypage/:id" element={<MyPage />} />
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
          <Route Route path="/questions/new" element={<BoardForm />} />
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

/* eslint-disable react/button-has-type */
import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// style
import GlobalFonts from '../fonts/fonts';
import Container from './AppStyle';

// Common
import Error404 from '../common/error/Error404';
import Nav from '../common/Nav';
import PrivateRoute from '../common/routes/PrivateRoute';

// features
import SignIn from '../features/Auth/SignIn';
import Redirect from '../features/Auth/Redirect';
import UserForm from '../features/Auth/UserForm';
import MyPage from '../features/MyPage';
import MainPage from '../features/Main/MainPage';
import Course from '../features/CourseMake';
import CourseCreationForm from '../features/CourseMake/CourseCreationForm';
import CourseView from '../features/CourseView';
import FollowersList from '../features/MyPage/Follow/FollowersList';
import FollowingsList from '../features/MyPage/Follow/FollowingsList';
import BoardList from '../features/MyPage/Board/BoardList';
import BoardListItem from '../features/MyPage/Board/BoardListItem';
import BoardForm from '../features/MyPage/Board/BoardForm';
import StoreView from '../features/StoreView';

// test
// import Profile from '../features/MyPage/Routes/Profile';

function App() {
  const { flag } = useSelector((state) => state.auth);
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogin = useCallback(() => {
    setIsLogged(true);
  }, []);
  const onClickLogout = useCallback(() => {
    setIsLogged(false);
  }, []);

  console.log(typeof flag, flag);
  return (
    <Container>
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickLogout}>LogOut</button>
      {isLogged ? <h1>로그인 했다</h1> : <h1>로그인 안했다</h1>}
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
          <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route path="/mypage/:id" element={<MyPage />} />
            <Route Route path="/questions" element={<BoardList />} />
          </Route>
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
          <Route path="/StoreView" element={<StoreView />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Link to="/mypage/1" element={<MyPage />}>
          go to profile
        </Link>
        <Nav />
      </BrowserRouter>
    </Container>
  );
}

export default App;

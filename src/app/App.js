/* eslint-disable react/button-has-type */
import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

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
import Course from '../features/CourseMake/Course';
import CourseCreationForm from '../features/CourseMake/CourseCreationForm';
import CourseView from '../features/CourseView';
import FollowersList from '../features/MyPage/Follow/FollowersList';
import FollowingsList from '../features/MyPage/Follow/FollowingsList';
import BoardListItem from '../features/MyPage/Board/BoardListItem';
import BoardForm from '../features/MyPage/Board/BoardForm';
import BoardList from '../features/MyPage/Board/BoardList';

// Common
import Error404 from '../common/error/Error404';
import PrivateRoute from '../common/routes/PrivateRoute';

// test
import Profile from '../features/MyPage/Routes/Profile';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogin = useCallback(() => {
    setIsLogged(true);
  }, []);
  const onClickLogout = useCallback(() => {
    setIsLogged(false);
  }, []);

  return (
    <div className="App">
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickLogout}>LogOut</button>
      {isLogged ? <h1>로그인 했다</h1> : <h1>로그인 안했다</h1>}
      <Container>
        <BrowserRouter>
          <GlobalFonts />
          <Routes>
            {/* test privateRoute */}
            <Route element={<PrivateRoute isLogged={isLogged} />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* auth */}
            <Route path="/naverlogin" element={<NaverLogin />} />
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

            <Route
              Route
              path="/questions/:QuestionId"
              element={<BoardListItem />}
            />
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
            <Route
              path="/CourseCreationForm"
              element={<CourseCreationForm />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Link to="/mypage/1" element={<MyPage />}>
            go to profile
          </Link>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// style
import GlobalFonts from '../assets/fonts/fonts';
import Container from './AppStyle';

// Common
import Error404 from '../common/error/Error404';
import Nav from '../common/Nav';

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

// import Profile from '../features/MyPage/Routes/Profile';
import isAuthenticated, {isLoggedIn} from '../common/api/isAuthenticated';
import PrivateRoute from '../common/routes/PrivateRoute';
import PublicRoute from '../common/routes/PublicRoute';

function App() { 
  return (
    <Container>

      <BrowserRouter>
        <GlobalFonts />
        <Routes>
          {/* private */}
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route Route path="/questions" element={<BoardList />} />
            <Route path="/questions/:QuestionId" element={<BoardListItem />} />
            <Route path="/questions/new" element={<BoardForm />} />
            <Route path="/CourseCreationForm" element={<CourseCreationForm />}/>
          </Route>

          {/* Only public Not Authenticated */}
          <Route element={<PublicRoute isAuthenticated={isLoggedIn} />}>
            <Route path="/member/signin" element={<SignIn />} />
            <Route path="/member/signup" element={<UserForm />} />
          </Route>

          {/* Public & private */}
          <Route path="/courseview/:curationNo" element={<CourseView />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route Route path="/" element={<MainPage />} />
          <Route path="/oauth/redirect" element={<Redirect />} />
          <Route path="/mypage/:id/follower" element={<FollowersList />} />
          <Route path="/mypage/:id/followee" element={<FollowingsList />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/StoreView" element={<StoreView />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </Container>
  );
}

export default App;

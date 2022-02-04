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
import MyPage from '../features/mypage/MyPage';

// Common
import Error404 from '../common/error/Error404';
// import BasicTabs from '../features/mypage/BasicTabs';
import Course from '../features/CourseMake/Course';
import CourseCreationForm from '../features/CourseMake/CourseCreationForm';
import CourseView from '../features/CourseView';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <GlobalFonts />
        <Routes>
          <Route path="/naverlogin" element={<NaverLogin />} />
          <Route path="/mypage" element={<MyPage />} />
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

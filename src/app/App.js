import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// features
import Home from '../features/test_todo/Home';
import Detail from '../features/test_todo/Detail';
import NaverLogin from '../features/Auth/Naver/NaverLogin';
import GoogleLogin from '../features/Auth/Google/GoogleLogin';
import NaverLoginCallback from '../features/Auth/Naver/NaverLoginCallback';
import GoogleLoginCallback from '../features/Auth/Google/GoogleLoginCallback';

// Common
import Error404 from '../common/error/Error404';
import Course from '../features/Course/Course';
import CourseSearch from '../features/Course/CourseSearch';
import CourseList from '../features/Course/CourseList';
import CourseCreationForm from '../features/Course/CourseCreationForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/login" element={<NaverLogin />} />
        {/* login 파일 통일 필요 */}
        <Route path="/googlelogin" element={<GoogleLogin />} />
        <Route path="/callback" element={<NaverLoginCallback />} />
        <Route path="/auth/google/callback" element={<GoogleLoginCallback />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/CourseSearch" element={<CourseSearch />} />
        <Route path="/CourseList" element={<CourseList />} />
        <Route path="/CourseCreationForm" element={<CourseCreationForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

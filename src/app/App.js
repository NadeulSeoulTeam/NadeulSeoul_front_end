import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// features
import Home from '../features/test_todo/Home';
import Detail from '../features/test_todo/Detail';
import NaverLogin from '../features/Auth/Naver/NaverLogin';
import GoogleLogin from '../features/Auth/Google/GoogleLogin';
import NaverLoginCallback from '../features/Auth/Naver/NaverLoginCallback';
import GoogleLoginCallback from '../features/Auth/Google/GoogleLoginCallback';
import MyPage from '../features/mypage/MyPage';

// Common
import Error404 from '../common/error/Error404';
// import BasicTabs from '../features/mypage/BasicTabs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/login" element={<NaverLogin />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* login 파일 통일 필요 */}
        <Route path="/googlelogin" element={<GoogleLogin />} />
        <Route path="/callback/" element={<NaverLoginCallback />} />
        <Route path="/auth/google/callback" element={<GoogleLoginCallback />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

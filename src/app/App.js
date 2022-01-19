import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// features
import Home from '../features/test_todo/Home';
import Detail from '../features/test_todo/Detail';
import NaverLogin from '../features/Auth/Naver/NaverLogin';
import NaverLoginCallback from '../features/Auth/Naver/NaverLoginCallback';

// Common
import Error404 from '../common/error/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/login" element={<NaverLogin />} />
        <Route path="/callback" element={<NaverLoginCallback />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

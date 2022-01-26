import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../features/test_todo/Home';
import Detail from '../features/test_todo/Detail';

// components
import MyPage from '../features/mypage/MyPage';
import FollowersList from '../features/mypage/Follow/FollowersList';
import FollowingsList from '../features/mypage/Follow/FollowingsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Route path="/mypage/:nickname" element={<MyPage />} />
        <Route
          Route
          path="/mypage/:nickname/followerslist"
          element={<FollowersList />}
        />
        <Route
          Route
          path="/mypage/:nickname/followingslist"
          element={<FollowingsList />}
        />
        <Route Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

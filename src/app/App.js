import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../features/test_todo/Home';
// import Detail from '../features/test_todo/Detail';

// components
import MyPage from '../features/mypage/MyPage';
import FollowersList from '../features/mypage/Follow/FollowersList';
import FollowingsList from '../features/mypage/Follow/FollowingsList';
import BoardListItem from '../features/mypage/Board/BoardListItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

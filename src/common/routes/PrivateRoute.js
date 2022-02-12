import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ isLogged }) {
  // 1은 이제 토큰에 들어있는 로그인한 사람의 id가 되겠징,,
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;

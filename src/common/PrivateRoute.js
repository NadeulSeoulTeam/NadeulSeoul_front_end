import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ flag }) {
  return flag === 'true' ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;

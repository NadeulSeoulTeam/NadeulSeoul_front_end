import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <>
      <Link to="/login">go back Login</Link>
      <h1>Error404</h1>
    </>
  );
}
export default Error404;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NaverLoginCallback() {
  const location = useLocation();
  const getAccessToken = () => {
    try {
      const key = location.hash.split('=')[0];
      console.log(location);
      console.log(key);
      if (key !== '#access_token') throw new Error();
      const value = location.hash.split('=')[1].split('&')[0];
      return value;
    } catch (e) {
      return <Link to="/error" />;
    }
  };

  return (
    <div>
      <Link to="/">Main</Link>
      {getAccessToken()}
    </div>
  );
}

export default NaverLoginCallback;

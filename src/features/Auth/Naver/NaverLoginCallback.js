import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NaverLoginCallback() {
  const location = useLocation();

  const getStateToken = () => {
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
  useEffect(() => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=m7ElqUoPxOdxQ1WacsCU&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=${getStateToken()}`;
  }, []);

  // https://nid.naver.com/oauth2.0/authorize?client_id=m7ElqUoPxOdxQ1WacsCU&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=AAAAOoObjtSBmB9vtukF3w0BC7BYZ4vId2kOSCBSDcxmov_DtjY3u8ATb9I3L-pdJisk9KulUsWrgCOmu2LKDH-i6U0

  return (
    <div>
      <Link to="/">Main</Link>
      <div>상태 토큰 : {getStateToken()}</div>
    </div>
  );
}

export default NaverLoginCallback;

import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// actions
// eslint-disable-next-line import/no-duplicates
// import { postNaverCode } from '../AuthSlice';
// eslint-disable-next-line import/no-duplicates
import { addNaverToken } from '../AuthSlice';
// eslint-disable-next-line import/no-duplicates
import { addNaverCode } from '../AuthSlice';

function NaverLoginCallback() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { naverCode } = useSelector((state) => state.auth);

  const getStateToken = useCallback(() => {
    try {
      const key = location.hash.split('=')[0];
      if (key !== '#access_token') throw new Error();
      const value = location.hash.split('=')[1].split('&')[0];
      dispatch(addNaverToken(value));
      return value;
    } catch (e) {
      return <Link to="/error" />;
    }
  });

  const getAccessCode = useCallback(() => {
    try {
      const code = new URL(window.location.href).searchParams.get('code');
      dispatch(addNaverCode(code));
      return code;
    } catch (e) {
      return <Link to="/error" />;
    }
  });

  useEffect(() => {
    if (!naverCode) {
      window.close();
    }
    // window.location.href =
    //   'https://nid.naver.com/oauth2.0/authorize?client_id=m7ElqUoPxOdxQ1WacsCU&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=AAAAOoObjtSBmB9vtukF3w0BC7BYZ4vId2kOSCBSDcxmov_DtjY3u8ATb9I3L-pdJisk9KulUsWrgCOmu2LKDH-i6U0';
    getAccessCode();
  }, []);

  return (
    <div>
      <Link to="/">Main</Link>
      <div>토큰 : {getStateToken} </div>
      <a href="https://nid.naver.com/oauth2.0/authorize?client_id=m7ElqUoPxOdxQ1WacsCU&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=AAAAOoObjtSBmB9vtukF3w0BC7BYZ4vId2kOSCBSDcxmov_DtjY3u8ATb9I3L-pdJisk9KulUsWrgCOmu2LKDH-i6U0">
        이동:
      </a>
      {naverCode}
      <div />
    </div>
  );
}

export default NaverLoginCallback;

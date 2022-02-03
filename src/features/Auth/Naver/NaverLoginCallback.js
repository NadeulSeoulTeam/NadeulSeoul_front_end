import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// actions
import { addNaverToken, addNaverCode, onChangeNaverCode } from '../AuthSlice';

function NaverLoginCallback() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { naverCode, isNaverCode } = useSelector((state) => state.auth);

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
      dispatch(onChangeNaverCode(true));
      return code;
    } catch (e) {
      return <Link to="/error" />;
    }
  });

  useEffect(() => {
    const checkURL = new URL(window.location.href).searchParams.get('code');
    if (checkURL !== null) {
      console.log('if문시작');
      getAccessCode();
      console.log('끝');
      // window.close();
    } else {
      // 상태토큰은 사람마다 다르므로 변경 및 변수화 필요
      window.location.href =
        'https://nid.naver.com/oauth2.0/authorize?client_id=m7ElqUoPxOdxQ1WacsCU&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=AAAAOoObjtSBmB9vtukF3w0BC7BYZ4vId2kOSCBSDcxmov_DtjY3u8ATb9I3L-pdJisk9KulUsWrgCOmu2LKDH-i6U0';
    }
  }, []);

  return (
    <div>
      <Link to="/">Main</Link>
      <div>토큰 : {getStateToken()} </div>
      <a href="https://nid.naver.com/oauth2.0/authorize?client_id=m7ElqUoPxOdxQ1WacsCU&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=AAAAOoObjtSBmB9vtukF3w0BC7BYZ4vId2kOSCBSDcxmov_DtjY3u8ATb9I3L-pdJisk9KulUsWrgCOmu2LKDH-i6U0">
        이동:
      </a>
      코드 유무 : {isNaverCode ? '코드 있음' : '코드 없음'}
      코드 값 : {naverCode}
    </div>
  );
}

export default NaverLoginCallback;
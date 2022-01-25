import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addGoogleCode, onChangeGoogleCode } from '../AuthSlice';

function GoogleLoginCallback() {
  const dispatch = useDispatch();
  const { googleCode, isGoogleCode } = useSelector((state) => state.auth);

  const getAccessCode = useCallback((accessCode) => {
    try {
      dispatch(addGoogleCode(accessCode));
      dispatch(onChangeGoogleCode(true));
      return accessCode;
    } catch (e) {
      return <Link to="/error" />;
    }
  });

  useEffect(() => {
    const accessCode = new URL(window.location.href).searchParams.get('code');
    getAccessCode(accessCode);
  }, []);

  return (
    <div>
      <Link to="/">Main</Link>
      코드 유무 : {isGoogleCode ? '코드 있음' : '코드 없음'}
      코드 값 : {googleCode}
    </div>
  );
}

export default GoogleLoginCallback;

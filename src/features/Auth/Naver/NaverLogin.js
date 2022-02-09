import React, { useEffect } from 'react';

function NaverLogin() {
  const initializeNaverLogin = () => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/callback',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60,
      },
    });
    naverLogin.init();
  };
  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <div>
      <h1>test_naver_login</h1>
      <div>
        <div id="naverIdLogin" />
      </div>
    </div>
  );
}

export default NaverLogin;

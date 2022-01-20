import React, { useState, useEffect, useRef } from 'react';

function GoogleLogin() {
  const googleLoginBtn = useRef(null);
  // 추후 redux 활용 예정
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState('');

  const googleSDK = () => {
    window.googleSDKLoaded = () => {
      console.log(window.gapi);
      window.gapi.load('auth2', () => {
        // const auth2 = window.gapi.auth2.init({
        const auth2 = window.gapi.auth2.getAuthInstance({
          client_id:
            '271697905044-7ojeih7vic8u14ltq92nthv35ljn1frv.apps.googleusercontent.com', // 나중에 숨길 거
          scope: 'profile email',
        });
        // 버튼 클릭
        // authorization만 필요할 경우 profile 받을 필요 없음
        auth2.attachClickHandler(
          googleLoginBtn.current,
          {},
          // 사용자 정보 불러오기
          (googleUser) => {
            const profile = googleUser.getBasicProfile();
            console.log(profile);
            // if back이 id_token과 access 토큰을 요구할 경우
            console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
            setToken(googleUser.getAuthResponse().id_token);
            console.log(`ID: ${profile.getId()}`);
            console.log(`Name: ${profile.getName()}`);
            console.log(`Image URL: ${profile.getImageUrl()}`);
            console.log(`Email: ${profile.getEmail()}`);
          },
          (error) => {
            alert(JSON.stringify(error, undefined, 2));
          }
        );
      });
    };

    // google SDK 로드
    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  };

  useEffect(() => {
    googleSDK();
  }, []);

  return (
    <div className="g-signin2" ref={googleLoginBtn} data-onsuccess="onSignIn" />
  );
}

export default GoogleLogin;

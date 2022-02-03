import React from 'react';
// import qs from 'qs';

// const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
// const SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

// const queryStr = qs.stringify({
//   client_id:
//     '271697905044-7ojeih7vic8u14ltq92nthv35ljn1frv.apps.googleusercontent.com', // hide
//   redirect_uri: 'http://localhost:3000/auth/google/callback',
//   response_type: 'code',
//   access_type: 'offline',
//   scope: SCOPE,
// });

// const loginUrl = `${AUTHORIZE_URI}?${queryStr}`;

function GoogleLogin() {
  // const { accessToken } = qs.parse(window.location.hash.substr(1));
  // if (!accessToken) {
  //   window.location.assign(loginUrl);
  //   return null;
  // }

  return (
    <button type="button">
      <a href="http://localhost:8080/oauth2/authorization/google" role="button">
        Google Login
      </a>
    </button>
  );
}

export default GoogleLogin;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// authenticated
// import { saveLoginSuccess, saveToken } from '../../../common/api/JWT-Token';
import { sendAuthCode } from '../AuthSlice';

function Redirect() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const authorizationCode = params.get('code');
    console.log(authorizationCode);
    dispatch(sendAuthCode(authorizationCode));
    // const token = params.get('token');
    // const flag = params.get('flag');
    // console.log(flag);
    // saveToken(token);
    // if (flag === 'true') {
    //   navigate('/member/signup');
    // } else {
    //   saveLoginSuccess(flag);
    //   navigate('/');
    // }
  }, []);

  return <div />;
}

export default Redirect;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../../common/api/JWT-Token';

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const token = params.get('token');
    const flag = params.get('flag');
    saveToken(token);
    if (flag === 'true') {
      navigate('/member/signup');
    } else {
      navigate('/');
    }
  }, []);

  return <div />;
}

export default Redirect;

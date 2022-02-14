import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../../common/api/JWT-Token';
import { saveFlag } from '../AuthSlice';

function Redirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const token = params.get('token');
    const flag = params.get('flag');
    console.log(flag);
    saveToken(token);
    dispatch(saveFlag(flag));
    if (flag === 'true') {
      navigate('/member/signup');
    } else {
      navigate('/');
    }
  }, []);

  return <div />;
}

export default Redirect;

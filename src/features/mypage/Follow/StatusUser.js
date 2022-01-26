import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// MUI
import Button from '@mui/material/Button';

function StatusUser() {
  const { userInfo } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          navigate('/followingslist');
        }}
      >
        팔로잉
      </Button>
      {userInfo.Followings}
      <Button
        variant="text"
        onClick={() => {
          navigate('/followerslist');
        }}
      >
        팔로워
      </Button>
      {userInfo.Followers}
    </>
  );
}

export default StatusUser;

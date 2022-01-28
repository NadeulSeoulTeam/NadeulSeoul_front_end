import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// MUI
import Button from '@mui/material/Button';

function StatusUser() {
  const { userInfo } = useSelector((state) => state);
  const navigate = useNavigate();
  const params = useParams();
  const mypage = userInfo[params.id - 1];

  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${mypage.id}/followingslist`);
        }}
      >
        팔로잉
      </Button>
      {mypage.Followings}
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${mypage.id}/followerslist`);
        }}
      >
        팔로워
      </Button>
      {mypage.Followers}
    </>
  );
}

export default StatusUser;

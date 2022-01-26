import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// MUI
import Button from '@mui/material/Button';

function StatusUser() {
  const { userInfo } = useSelector((state) => state);
  const navigate = useNavigate();
  const params = useParams();
  const mypage = userInfo[params.nickname];

  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${mypage.nickname}/followingslist`);
        }}
      >
        팔로잉
      </Button>
      {mypage.Followings}
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${mypage.nickname}/followerslist`);
        }}
      >
        팔로워
      </Button>
      {mypage.Followers}
    </>
  );
}

export default StatusUser;

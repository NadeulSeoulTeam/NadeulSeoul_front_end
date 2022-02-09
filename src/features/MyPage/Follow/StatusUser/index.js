import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// MUI
import Button from '@mui/material/Button';

function StatusUser() {
  const { userInfo } = useSelector((state) => state.mypage);
  const navigate = useNavigate();
  const params = useParams();
  const mypage = userInfo.filter((v) => {
    return v.id === parseInt(params.id, 10);
  })[0];
  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${mypage.id}/followee`);
        }}
      >
        팔로잉
      </Button>
      {mypage.Followings}
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${mypage.id}/follower`);
        }}
      >
        팔로워
      </Button>
      {mypage.Followers}
    </>
  );
}

export default StatusUser;

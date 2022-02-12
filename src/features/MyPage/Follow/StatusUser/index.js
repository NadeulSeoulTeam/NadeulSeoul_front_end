import React from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import Button from '@mui/material/Button';

function StatusUser({ followerCount, followeeCount, userId }) {
  const navigate = useNavigate();
  // const params = useParams();
  // const mypage = user?.data;
  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${userId}/followee`);
        }}
      >
        팔로잉
      </Button>
      {followeeCount}
      <Button
        variant="text"
        onClick={() => {
          navigate(`/mypage/${userId}/follower`);
        }}
      >
        팔로워
      </Button>
      {followerCount}
    </>
  );
}

export default StatusUser;

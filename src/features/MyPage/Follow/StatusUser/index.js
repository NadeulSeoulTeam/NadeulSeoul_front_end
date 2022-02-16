import React from 'react';
import { useNavigate } from 'react-router-dom';

// style
import { FunctionBtn, Number, Description } from './styles';

function StatusUser({ followerCount, followeeCount, userId }) {
  const navigate = useNavigate();

  return (
    <div>
      <FunctionBtn
        onClick={() => {
          navigate(`/mypage/${userId}/followee`);
        }}
      >
        <Number>{followeeCount}</Number>
        <Description>팔로잉</Description>
      </FunctionBtn>
      <FunctionBtn
        onClick={() => {
          navigate(`/mypage/${userId}/follower`);
        }}
      >
        <Number>{followerCount}</Number>
        <Description>팔로워</Description>
      </FunctionBtn>
    </div>
  );
}

export default StatusUser;

import React from 'react';
import { useSelector } from 'react-redux';

function FollowersList() {
  const { FollowInfo } = useSelector((state) => state);
  return (
    <>
      <h1>내 팔로워 리스트</h1>
      <h2>닉네임</h2>
      <p>
        {FollowInfo.FollowersList.map((v) => (
          <li key={v.nickname}> {v.nickname}</li>
        ))}
      </p>
    </>
  );
}

export default FollowersList;

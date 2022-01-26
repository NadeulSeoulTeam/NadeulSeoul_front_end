import React from 'react';
import { useSelector } from 'react-redux';

function FollowingsList() {
  const { FollowInfo } = useSelector((state) => state);
  return (
    <>
      <h1>내 팔로잉 리스트</h1>
      <h2>닉네임</h2>
      <p>
        {FollowInfo.FollowingsList.map((v) => (
          <li key={v.nickname}>{v.nickname}</li>
        ))}
      </p>
    </>
  );
}

export default FollowingsList;

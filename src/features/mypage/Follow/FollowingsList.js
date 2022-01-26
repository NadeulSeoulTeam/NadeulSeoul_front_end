import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function FollowingsList() {
  const { FollowInfo } = useSelector((state) => state);
  const params = useParams();
  const followingsList = FollowInfo[params.nickname].FollowingsList;
  return (
    <>
      <h1>{params.nickname}님의 팔로잉 리스트</h1>
      <h2>닉네임</h2>
      <p>
        {followingsList?.map((v) => (
          <li key={v.nickname}>{v.nickname}</li>
        ))}
      </p>
    </>
  );
}

export default FollowingsList;

import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function FollowersList() {
  // user별 팔로잉 팔로우 리스트를 불러오면 된다.
  const { FollowInfo } = useSelector((state) => state);
  const params = useParams();
  const followersList = FollowInfo[params.nickname].FollowersList;
  return (
    <>
      <h1>내 팔로워 리스트</h1>
      <h2>닉네임</h2>
      <p>
        {followersList.map((v) => (
          <li key={v.nickname}> {v.nickname}</li>
        ))}
      </p>
    </>
  );
}

export default FollowersList;

import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function FollowersList() {
  // user별 팔로잉 팔로우 리스트를 불러오면 된다.
  const { FollowInfo } = useSelector((state) => state);
  const params = useParams();
  const followersList = FollowInfo[params.id - 1].FollowersList;
  const nickName = FollowInfo[params.id - 1].nickname;
  return (
    <>
      <h1>{nickName}님의 팔로워 리스트</h1>
      <h2>닉네임</h2>
      <p>
        {followersList?.map((v) => (
          <li key={v.nickname}> {v.nickname}</li>
        ))}
      </p>
    </>
  );
}

export default FollowersList;

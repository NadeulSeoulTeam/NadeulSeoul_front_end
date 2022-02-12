/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// actions
import { follow, loadUser, unfollow, loadFollowings } from '../../MyPageSlice';

function FollowButton({ userId }) {
  // 구현 해야 하는 것
  // 3. 추후에 소셜로그인 마무리 되면 토큰의 유무로 로그인한 사람 판단 -> 로그인한 사람만 mypage 접근 가능
  // praivateRoute로 구현 하면 될거 같음

  const dispatch = useDispatch();
  const { followeeUsers } = useSelector((state) => state.mypage);
  // 팔로잉 목록 출력, 현재 meanstrike계정에 로그인 했다고 가정
  const myId = 1; // 1번 사용자가 로그인했다고 가정
  const isFollowing = followeeUsers?.find((v) => v.followerSeq === userId);
  const params = useParams();
  console.log(params);

  console.log(userId);

  const onClickButton = useCallback(async () => {
    if (isFollowing) {
      dispatch(unfollow(userId))
        .unwrap()
        .then((response) => {
          console.log(response);
          dispatch(loadUser(params.id));
          dispatch(loadFollowings(myId));
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      dispatch(follow(userId))
        .unwrap()
        .then((response) => {
          console.log(response);
          dispatch(loadUser(params.id));
          dispatch(loadFollowings(myId));
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, [userId, isFollowing]);

  // 나 자신한테는 팔로우 언팔로우 버튼 뜨지 않음
  if (userId === myId) {
    return null;
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClickButton}>
        {isFollowing ? 'unfollow' : 'follow'}
      </Button>
    </Stack>
  );
}

export default FollowButton;

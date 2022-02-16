/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// style
import FollowBtn from './styles';

// actions
import { follow, loadUser, unfollow, loadFollowings } from '../../MyPageSlice';

// cookie
import { getUserInfo } from '../../../../common/api/JWT-Token';

function FollowButton({ userId }) {
  const dispatch = useDispatch();
  const { followeeUsers } = useSelector((state) => state.mypage);
  // 팔로잉 목록 출력, 현재 meanstrike계정에 로그인 했다고 가정
  console.log(userId);

  const myId = getUserInfo().userSeq; // 1번 사용자가 로그인했다고 가정
  const isFollowing = followeeUsers?.find((v) => v.followeeSeq === userId);
  const params = useParams();
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
    <FollowBtn isFollowing={isFollowing} onClick={onClickButton}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </FollowBtn>
  );
}

export default FollowButton;

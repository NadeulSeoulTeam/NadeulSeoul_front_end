/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// style
import { get } from 'lodash';
import FollowBtn from './styles';

// actions
import {
  follow,
  loadUser,
  unfollow,
  loadFollowings,
  anotherLoadFollowings,
} from '../../MyPageSlice';

// cookie
import { getUserInfo } from '../../../../common/api/JWT-Token';

function FollowButton({ userId }) {
  const dispatch = useDispatch();
  const { followeeUsers } = useSelector((state) => state.mypage);
  const { anotherFolloweeUsers } = useSelector((state) => state.mypage);
  // console.log(followeeUsers); // 내가 지금 접근한 사람의 팔로잉 리스트
  // console.log(anotherFolloweeUsers); //   현재 나의 팔로잉 리스트
  const myId = getUserInfo().userSeq; // 1번 사용자가 로그인했다고 가정
  const params = useParams();

  // 정리 리스트 안 객체 값 비교 , 현재 내가 접근한 사람과 나의 팔로잉 리스트 비교 => 둘이 중복으로 팔로잉 하는 사람 배열
  console.log(userId); // 현재 접근한 멤버 id
  const result = followeeUsers?.filter(({ followeeSeq: id1 }) =>
    anotherFolloweeUsers?.some(({ followeeSeq: id2 }) => id2 === id1)
  );

  const isFollowing = result?.find((v) => v.followeeSeq === userId);
  // console.log(isFollowing);
  // const meFollowing = anotherFolloweeUsers?.find((v)=>v.followeeSeq === )

  console.log(result);

  useEffect(() => {
    dispatch(anotherLoadFollowings(myId));
  }, []);

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
  }, [userId, isFollowing, params.id, myId]);

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

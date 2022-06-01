/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
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
  const [myId, setMyId] = useState(getUserInfo().userSeq);
  const params = useParams();
  // 정리 리스트 안 객체 값 비교 , 현재 내가 접근한 사람과 나의 팔로잉 리스트 비교 => 둘이 중복으로 팔로잉 하는 사람 배열
  const [result, setResult] = useState(
    followeeUsers?.filter(({ followeeSeq: id1 }) =>
      anotherFolloweeUsers?.some(({ followeeSeq: id2 }) => id2 === id1)
    )
  );
  const [isFollowing, setIsFollowing] = useState(
    result?.find((v) => v.followeeSeq === userId)
  );

  useEffect(() => {
    dispatch(anotherLoadFollowings(myId));
  }, []);

  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch(unfollow(userId))
        .unwrap()
        .then((response) => {
          console.log(response);
          dispatch(loadUser(params.id));
          setIsFollowing(false);
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
          setIsFollowing(true);
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

  // 정리 is Following값을 변수로해서 이런식으로도 할 수 있구나
  return (
    <FollowBtn isFollowing={isFollowing} onClick={onClickButton}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </FollowBtn>
  );
}

export default FollowButton;

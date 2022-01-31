import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// actions
import { follow, unfollow } from '../mypageSlice';

function FollowButton({ UserId }) {
  // 구현 해야 하는 것
  // 2. 팔로잉 유무에 따라서 버튼 팔로우 / 언팔로우 나누기 => dispatch 연결  clear
  // => 현재는 meanstrike에 로그인 했음을 가정하고,,!

  // 3. 추후에 소셜로그인 마무리 되면 토큰의 유무로 로그인한 사람 판단 -> 로그인한 사람만 mypage 접근 가능
  const dispatch = useDispatch();
  const { FollowInfo, followLoading } = useSelector((state) => state);
  const myFollowingList = FollowInfo[0].FollowingsList; // 팔로잉 목록 출력, 현재 meanstrike계정에 로그인 했다고 가정
  const [follwButtonStatus, setfollowButtonStatus] = useState('');

  useEffect(() => {
    const isFollowing = myFollowingList.find((v) => v.id === UserId);
    if (isFollowing) {
      setfollowButtonStatus('언팔로우');
    } else {
      setfollowButtonStatus('팔로우');
    }
  }, []);

  const onClickButton = useCallback(() => {
    if (follwButtonStatus === '팔로우') {
      dispatch(
        unfollow({
          id: UserId,
        })
      );
      setfollowButtonStatus('언팔로우');
    } else {
      dispatch(
        follow({
          id: UserId,
        })
      );
      setfollowButtonStatus('팔로우');
    }
  }, [follwButtonStatus]);

  // console.log(params.nickname);
  // console.log(myFollowingList);
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        onClick={onClickButton}
        loading={followLoading}
      >
        {follwButtonStatus}
      </Button>
    </Stack>
  );
}

FollowButton.propTypes = {
  UserId: PropTypes.number.isRequired,
};

export default FollowButton;

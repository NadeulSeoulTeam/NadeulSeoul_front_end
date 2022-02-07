import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// actions
import { follow, unfollow } from '../../MyPageSlice';

function FollowButton({ UserId }) {
  // 구현 해야 하는 것
  // 3. 추후에 소셜로그인 마무리 되면 토큰의 유무로 로그인한 사람 판단 -> 로그인한 사람만 mypage 접근 가능
  // praivateRoute로 구현 하면 될거 같음

  const dispatch = useDispatch();
  const { FollowInfo } = useSelector((state) => state.mypage);
  const myFollowingList = FollowInfo[0].FollowingsList; // 팔로잉 목록 출력, 현재 meanstrike계정에 로그인 했다고 가정
  const myId = FollowInfo[0].id;
  const isFollowing = myFollowingList?.find((v) => v.id === String(UserId));

  // version1
  // useEffect(() => {
  //   if (isFollowing) {
  //     setfollowButtonStatus('언팔로우');
  //   } else {
  //     setfollowButtonStatus('팔로우');
  //   }
  // }, []);

  // const onClickButton = useCallback(() => {
  //   if (follwButtonStatus === '팔로우') {
  //     dispatch(
  //       unfollow({
  //         id: UserId,
  //       })
  //     );
  //     setfollowButtonStatus('언팔로우');
  //   } else {
  //     dispatch(
  //       follow({
  //         id: UserId,
  //       })
  //     );
  //     setfollowButtonStatus('팔로우');
  //   }
  // }, [follwButtonStatus]);

  // version2

  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch(
        unfollow({
          member_seq: UserId,
        })
      )
        .unwrap()
        .then(() => {
          toast.success('언팔로우 성공');
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      dispatch(
        follow({
          member_seq: UserId,
        })
      )
        .unwrap()
        .then(() => {
          toast.success('팔로우 성공');
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, [isFollowing]);

  // 나 자신한테는 팔로우 언팔로우 버튼 뜨지 않음
  if (UserId === myId) {
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

FollowButton.propTypes = {
  UserId: PropTypes.number.isRequired,
};

export default FollowButton;

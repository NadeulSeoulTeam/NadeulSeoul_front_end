import React from 'react';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function FollowButton() {
  // 구현 해야 하는 것
  // 2. 팔로잉 유무에 따라서 버튼 팔로우 / 언팔로우 나누기 => dispatch 연결
  // 3. 추후에 소셜로그인 마무리 되면 토큰의 유무로 로그인한 사람 판단 -> 로그인한 사람만 mypage 접근 가능
  // const [isFollowing] = useState(false);
  // const { FollowList } = useSelecotr((state) => state);
  // const myFollowingList = FollowList;
  // console.log(isFollowing);
  // console.log(myFollowingList);
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained"> 팔로우 </Button>
    </Stack>
  );
}

export default FollowButton;

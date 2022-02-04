import React, { useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);
  const onClickButton = useCallback(() => {
    setIsFollowing(true);
  });
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClickButton} variant="contained">
        {isFollowing ? '팔로우' : '언팔로우'}
      </Button>
    </Stack>
  );
}

export default FollowButton;

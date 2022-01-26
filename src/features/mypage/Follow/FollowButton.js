import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function FollowButton({ content }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{content}</Button>
    </Stack>
  );
}

export default FollowButton;

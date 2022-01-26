import React from 'react';
import { useSelector } from 'react-redux';
// mui
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// components
import FollowButton from '../Follow/FollowButton';
import StatusUser from '../Follow/StatusUser';

function ProfileCard() {
  const { userInfo } = useSelector((state) => state);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            사진
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userInfo.nickname}
        subheader={<StatusUser />}
      />
      <FollowButton content="팔로우" />
    </Card>
  );
}

export default ProfileCard;

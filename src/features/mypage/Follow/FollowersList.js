import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

// mui list
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// component
import FollowButton from './FollowButton';

// mui
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function FollowersList() {
  // user별 팔로잉 팔로우 리스트를 불러오면 된다.
  const { FollowInfo } = useSelector((state) => state.mypage);
  const params = useParams();
  const FollowList = FollowInfo.filter((v) => {
    console.log(typeof v.id);
    return v.id === parseInt(params.id, 10);
  });
  const nickName = FollowList[0].nickname;
  const followersList = FollowList[0].FollowersList;
  console.log(typeof params.id);
  console.log(FollowList[0].FollowersList);
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            {nickName}님의 팔로워 리스트
          </Typography>
          <Demo>
            <List dense={false}>
              {followersList.map((v, i) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={v + i}
                  secondaryAction={
                    <IconButton edge="end" aria-label="Follow">
                      <FollowButton UserId={v.id} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>{v.emoji}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`${v.nickname}`} />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FollowersList;

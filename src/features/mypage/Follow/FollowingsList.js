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

function FollowingsList() {
  const { FollowInfo } = useSelector((state) => state);
  const params = useParams();
  const followingsList = FollowInfo[params.id - 1].FollowingsList;
  const nickName = FollowInfo[params.id - 1].nickname;
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            {nickName}님의 팔로워 리스트
          </Typography>
          <Demo>
            <List dense={false}>
              {followingsList.map((v, i) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={v + i}
                  secondaryAction={
                    <IconButton edge="end" aria-label="Follow">
                      <FollowButton />
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

export default FollowingsList;

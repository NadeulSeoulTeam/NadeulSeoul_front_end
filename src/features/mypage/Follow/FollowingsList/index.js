import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// mui list
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// component
import FollowButton from '../FollowButton';

// mui

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function FollowingsList() {
  const { FollowInfo } = useSelector((state) => state.mypage);
  const params = useParams();
  const FollowList = FollowInfo.filter((v) => {
    // console.log(typeof v.id);
    return v.id === parseInt(params.id, 10);
  });
  const nickName = FollowList[0].nickname;
  const followingsList = FollowList[0].FollowingsList;
  const navigate = useNavigate();

  const onClickGotoMypage = useCallback(
    (id) => () => {
      console.log('go to mypage"');
      navigate(`/mypage/${id}`);
    },
    []
  );

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            {nickName}님의 팔로잉 리스트
          </Typography>
          <Demo>
            <List dense={false}>
              {followingsList.map((v, i) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={v + i}
                  secondaryAction={
                    <IconButton edge="end" aria-label="Follow">
                      <FollowButton UserId={parseInt(v.id, 10)} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>{v.emoji}</Avatar>
                  </ListItemAvatar>
                  <Button onClick={onClickGotoMypage(v.id)}>
                    {v.nickname}
                  </Button>
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

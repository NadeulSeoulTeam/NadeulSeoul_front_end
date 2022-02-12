// 여기는 일단 놔두자, 뭔가 오류가 있는거 같기도,,
// 같은 걸로 2개다 해서 하나는 안되는거 일지도,,,

import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// component
import FollowButton from '../FollowButton';

// actions
import { loadFollowers } from '../../MyPageSlice';

// mui
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function FollowersList() {
  // user별 팔로잉 팔로우 리스트를 불러오면 된다.
  const { followerUsers, followinfoToList } = useSelector(
    (state) => state.mypage
  );
  const params = useParams();
  const dispatch = useDispatch();
  // const FollowList = FollowInfo.filter((v) => {
  //   // console.log(typeof v.id);
  //   return v.id === parseInt(params.id, 10);
  // });
  const nickName = 'meanstrike';
  // const followersList = FollowList[0].FollowersList;
  const navigate = useNavigate();

  // console.log(params.id);
  // console.log(FollowList[0].FollowersList);
  console.log(followinfoToList);

  useEffect(() => {
    dispatch(loadFollowers(params.id))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

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
            {nickName}님의 팔로워 리스트
          </Typography>
          <Demo>
            <List dense={false}>
              {followerUsers.map((v, i) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={v + i}
                  secondaryAction={
                    <IconButton edge="end" aria-label="Follow">
                      <FollowButton UserId={parseInt(v?.memberSeq, 10)} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>{v?.emoji}</Avatar>
                  </ListItemAvatar>
                  <Button onClick={onClickGotoMypage(v?.memberSeq)}>
                    {v?.memberSeq}
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

export default FollowersList;

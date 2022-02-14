import React, { useCallback, useEffect } from 'react';
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
import { loadFollowings } from '../../MyPageSlice';

// mui
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function FollowingsList() {
  const { followeeUsers, user } = useSelector((state) => state.mypage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const onClickGotoMypage = useCallback(
    (id) => () => {
      navigate(`/mypage/${id}`);
    },
    []
  );

  const MyId = 1; // 1번 사용자가 로그인 했다고 가정

  if (MyId !== user?.userSeq) {
    useEffect(() => {
      dispatch(loadFollowings(params.id))
        .unwrap()
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }, []);
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            {user?.nickName}님의 팔로잉 리스트
          </Typography>
          <Demo>
            <List dense={false}>
              {followeeUsers?.map((v, i) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={v + i}
                  secondaryAction={
                    <IconButton edge="end" aria-label="Follow">
                      <FollowButton userId={v?.followeeSeq} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>{v?.emoji}</Avatar>
                  </ListItemAvatar>
                  <Button onClick={onClickGotoMypage(v?.followeeSeq)}>
                    {v?.nickname}
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

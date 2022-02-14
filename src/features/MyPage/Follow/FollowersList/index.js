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
import { loadFollowers } from '../../MyPageSlice';

// mui
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function FollowersList() {
  const { followerUsers, user } = useSelector((state) => state.mypage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const onClickGotoMypage = useCallback(
    (id) => () => {
      navigate(`/mypage/${id}`);
    },
    []
  );

  // 요청을 한번만 보낼수가 없다! 유저벌 팔로잉 팔로워 리스트도 가져와야하기 떄문에!
  // 내 팔로잉 팔로우 리스트를 가져올때는 한번의 요청으로도 가능하지만,
  // 다른 사람의 팔로잉 팔로우 리스트까지 가져와야 하니깐 요청이 이루어 질 수밖에 없음!
  // 분기 조건으로 하면 될거 같다.

  const MyId = 1; // 1번 사용자가 로그인 했다고 가정 => 토큰으로 대체

  if (MyId !== user?.userSeq) {
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
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            {user?.nickName}님의 팔로워 리스트
          </Typography>
          <Demo>
            <List dense={false}>
              {followerUsers?.map((v, i) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={v + i}
                  secondaryAction={
                    <IconButton edge="end" aria-label="Follow">
                      <FollowButton UserId={parseInt(v?.followerSeq, 10)} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>{v?.emoji}</Avatar>
                  </ListItemAvatar>
                  <Button onClick={onClickGotoMypage(v?.followerSeq)}>
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

export default FollowersList;

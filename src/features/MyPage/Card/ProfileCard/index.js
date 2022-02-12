import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// mui
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// components
import FollowButton from '../../Follow/FollowButton';
import StatusUser from '../../Follow/StatusUser';

function ProfileCard({
  userId,
  emoji,
  nickName,
  followeeCount,
  followerCount,
}) {
  const [isMe, setIsMe] = useState(false);
  const me = 1; // 로그인한 사람의 id 현재 로그인 가정(meanstrike)
  const navigate = useNavigate();

  // 1. 내 마이페이지에 들어오면 버튼이 안보이게
  // => 일단 지금은 meastrike로 로그인 했다고 가정하고 만들기
  // => me load하고, mypage에 있는 id가 같으면 내 페이지인거고 아니면 다른 사람 페이지
  useEffect(() => {
    if (me === userId) {
      setIsMe(true);
    } else {
      setIsMe(false);
    }
  }, []);

  const onClickToQuestionBoard = useCallback(() => {
    console.log('문의게시판으로 가자');
    navigate('/questions');
  }, []);

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        {nickName}님의 mypage
      </Typography>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[200] }} aria-label="emoji">
              {emoji}
            </Avatar>
          }
          title={nickName}
          subheader={
            <StatusUser
              followeeCount={followeeCount}
              followerCount={followerCount}
              userId={userId}
            />
          }
        />
        {isMe ? null : <FollowButton userId={userId} />}
      </Card>
      <Stack spacing={2} direction="row-reverse">
        <Button variant="contained" onClick={onClickToQuestionBoard}>
          문의게시판
        </Button>
      </Stack>
    </>
  );
}

export default ProfileCard;

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// mui
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

// components
import FollowButton from '../../Follow/FollowButton';
import StatusUser from '../../Follow/StatusUser';

// custom style
import { GreenBtn } from './styles';

// cookie
// import { getUserInfo } from '../../../../common/api/JWT-Token';

function ProfileCard({
  userId,
  emoji,
  nickName,
  followeeCount,
  followerCount,
}) {
  const [isMe, setIsMe] = useState(false);
  // const me = getUserInfo().userSeq;
  const me = 1;
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
  }, [userId]);

  const onClickToQuestionBoard = useCallback(() => {
    console.log('문의게시판으로 가자');
    navigate('/questions');
  }, []);

  return (
    <>
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
        {isMe ? (
          <GreenBtn variant="contained" onClick={onClickToQuestionBoard}>
            문의게시판
          </GreenBtn>
        ) : null}
      </Stack>
    </>
  );
}

export default ProfileCard;

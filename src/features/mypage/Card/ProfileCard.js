import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  const [isMe, setIsMe] = useState(true);
  const params = useParams();
  const mypage = userInfo[params.nickname];
  const me = userInfo.meanstrike.nickname;
  console.log(me);
  console.log(mypage.nickname);

  // 1. 내 마이페이지에 들어오면 버튼이 안보이게
  // => 일단 지금은 meastrike로 로그인 했다고 가정하고 만들기
  // => me load하고, mypage에 있는 nickname/id가 같으면 내 페이지인거고 아니면 다른 사람 페이지 clear
  useEffect(() => {
    if (me === mypage.nickname) {
      setIsMe(false);
    } else {
      setIsMe(true);
    }
  });

  return (
    <>
      <h1>{mypage.nickname}님의 mypage</h1>
      <Card sx={{ maxWidth: 300 }}>
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
          title={mypage.nickname}
          subheader={<StatusUser />}
        />
        {isMe ? <FollowButton /> : null}
      </Card>
    </>
  );
}

export default ProfileCard;

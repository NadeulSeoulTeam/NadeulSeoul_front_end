import React, { useState, useEffect } from 'react';

// style
import {
  Container,
  Nickname,
  ProfileEmoji,
  ProfileDiv,
  TextDiv,
} from './styles';

// components
import FollowButton from '../../Follow/FollowButton';
import StatusUser from '../../Follow/StatusUser';

// cookie
import { getUserInfo } from '../../../../common/api/JWT-Token';

function ProfileCard({
  userId,
  emoji,
  nickName,
  followeeCount,
  followerCount,
}) {
  const [isMe, setIsMe] = useState(false);
  const me = getUserInfo().userSeq;

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

  return (
    <Container>
      <ProfileDiv>
        <ProfileEmoji>{emoji}</ProfileEmoji>
        <TextDiv>
          <Nickname>{nickName}</Nickname>
          <StatusUser
            followeeCount={followeeCount}
            followerCount={followerCount}
            userId={userId}
          />
        </TextDiv>
        <div style={{ position: 'absolute', top: '50px', left: '247px' }}>
          {isMe ? null : <FollowButton userId={userId} />}
        </div>
      </ProfileDiv>
    </Container>
    // <>
    //   <Card sx={{ maxWidth: 300 }}>
    //     <CardHeader
    //       avatar={
    //         <Avatar sx={{ bgcolor: red[200] }} aria-label="emoji">
    //           {emoji}
    //         </Avatar>
    //       }
    //       title={nickName}
    //       subheader={
    //         <StatusUser
    //           followeeCount={followeeCount}
    //           followerCount={followerCount}
    //           userId={userId}
    //         />
    //       }
    //     />
    //     {isMe ? null : <FollowButton userId={userId} />}
    //   </Card>
    //   <Stack spacing={2} direction="row-reverse">
    //     {isMe ? (
    //       <GreenBtn variant="contained" onClick={onClickToQuestionBoard}>
    //         문의게시판
    //       </GreenBtn>
    //     ) : null}
    //   </Stack>
    // </>
  );
}

export default ProfileCard;

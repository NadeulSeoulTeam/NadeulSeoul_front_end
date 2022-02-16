import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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

// dummydata

function ProfileCard() {
  // const [isMe, setIsMe] = useState(false);
  // const me = 1; // 로그인한 사람의 id 현재 로그인 가정(meanstrike)
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.mypage);
  console.log(userInfo[0]);

  // 1. 내 마이페이지에 들어오면 버튼이 안보이게
  // => 일단 지금은 meastrike로 로그인 했다고 가정하고 만들기
  // => me load하고, mypage에 있는 id가 같으면 내 페이지인거고 아니면 다른 사람 페이지
  // useEffect(() => {
  //   if (me === userId) {
  //     setIsMe(true);
  //   } else {
  //     setIsMe(false);
  //   }
  // }, []);

  const onClickToQuestionBoard = useCallback(() => {
    console.log('문의게시판으로 가자');
    navigate('/questions');
  }, []);

  return (
    <Container>
      <ProfileDiv>
        <ProfileEmoji>{userInfo[0].emoji}</ProfileEmoji>
        <TextDiv>
          <Nickname>{userInfo[0].nickname}</Nickname>
          <StatusUser
            followeeCount={userInfo[0].Followings}
            followerCount={userInfo[0].Followers}
            userId={userInfo[0].id}
          />
        </TextDiv>
        <div style={{ position: 'absolute', top: '50px', left: '240px' }}>
          <FollowButton userId={userInfo[0].id} />
        </div>
      </ProfileDiv>
      <Stack spacing={2} direction="row-reverse">
        <Button variant="contained" onClick={onClickToQuestionBoard}>
          문의게시판
        </Button>
      </Stack>
    </Container>
  );
}

export default ProfileCard;

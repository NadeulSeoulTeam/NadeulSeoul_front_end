import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// style
import List from '@mui/material/List';
import {
  Container,
  Title,
  SubTitle,
  ProfileEmoji,
  Nickname,
  CustomListItem,
} from './styles';

// component
import FollowButton from '../FollowButton';

// actions
import { loadFollowings } from '../../MyPageSlice';

// cookie
import { getUserInfo } from '../../../../common/api/JWT-Token';

function FollowingsList() {
  const { followeeUsers } = useSelector((state) => state.mypage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  // const MyId = getUserInfo().userSeq; // 1번 사용자가 로그인 했다고 가정 => 토큰으로 대체

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

  const onClickGotoMypage = useCallback(
    (id) => () => {
      navigate(`/mypage/${id}`);
    },
    []
  );

  console.log(getUserInfo().userSeq);
  const isMe = followeeUsers?.find(
    (v) => v.followerSeq === getUserInfo().userSeq
  );

  return (
    <Container>
      <Title>{getUserInfo().Nickname}</Title>
      <SubTitle>팔로잉</SubTitle>
      <List>
        {followeeUsers?.map((v, i) => (
          <CustomListItem
            // eslint-disable-next-line react/no-array-index-key
            key={v + i}
            secondaryAction={
              !isMe && <FollowButton userId={parseInt(v?.followeeSeq, 10)} />
            }
          >
            <ProfileEmoji>{v?.emoji}</ProfileEmoji>
            <Nickname onClick={onClickGotoMypage(v?.followeeSeq)}>
              {v?.nickname}
            </Nickname>
          </CustomListItem>
        ))}
      </List>
    </Container>
  );
}

export default FollowingsList;

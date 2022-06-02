/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
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
import { loadFollowers } from '../../MyPageSlice';

// cookie
import { getUserInfo } from '../../../../common/api/JWT-Token';

function FollowersList() {
  const { followerUsers } = useSelector((state) => state.mypage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [isMe, setIsme] = useState(
    followerUsers?.find((v) => v.followeeSeq === getUserInfo().userSeq)
  );

  useEffect(() => {
    dispatch(loadFollowers(params.id))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [params.id]);

  const onClickGotoMypage = useCallback(
    (id) => () => {
      navigate(`/mypage/${id}`);
    },
    []
  );

  console.log(getUserInfo().userSeq);

  // 요청을 한번만 보낼수가 없다! 유저벌 팔로잉 팔로워 리스트도 가져와야하기 떄문에!
  // 내 팔로잉 팔로우 리스트를 가져올때는 한번의 요청으로도 가능하지만,
  // 다른 사람의 팔로잉 팔로우 리스트까지 가져와야 하니깐 요청이 이루어 질 수밖에 없음!
  // 분기 조건으로 하면 될거 같다.

  return (
    <Container>
      <Title>{getUserInfo().Nickname}</Title>
      <SubTitle>팔로워</SubTitle>
      <List>
        {followerUsers?.map((v, i) => (
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

export default FollowersList;

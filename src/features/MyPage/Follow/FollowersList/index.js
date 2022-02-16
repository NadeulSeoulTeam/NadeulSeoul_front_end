// 여기는 일단 놔두자, 뭔가 오류가 있는거 같기도,,
// 같은 걸로 2개다 해서 하나는 안되는거 일지도,,,

import React, { useCallback } from 'react';
// import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// mui
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
// import { loadFollowers } from '../../MyPageSlice';

function FollowersList() {
  // user별 팔로잉 팔로우 리스트를 불러오면 된다.
  const { followinfoToList, FollowInfo } = useSelector((state) => state.mypage);
  console.log(FollowInfo[0].FollowersList);
  // const params = useParams();
  // const dispatch = useDispatch();
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

  // useEffect(() => {
  //   dispatch(loadFollowers(params.id))
  //     .unwrap()
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }, []);

  const onClickGotoMypage = useCallback(
    (id) => () => {
      console.log('go to mypage"');
      navigate(`/mypage/${id}`);
    },
    []
  );
  return (
    // <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
    <Container>
      <Title>{nickName}</Title>
      <SubTitle>팔로워</SubTitle>
      <List>
        {FollowInfo[0].FollowersList?.map((v, i) => (
          <CustomListItem
            // eslint-disable-next-line react/no-array-index-key
            key={v + i}
            secondaryAction={
              <FollowButton UserId={parseInt(v?.memberSeq, 10)} />
            }
          >
            <ProfileEmoji>{v?.emoji}</ProfileEmoji>
            <Nickname onClick={onClickGotoMypage(v?.memberSeq)}>
              {v?.nickname}
            </Nickname>
          </CustomListItem>
        ))}
      </List>
    </Container>
    // </Box>
  );
}

export default FollowersList;

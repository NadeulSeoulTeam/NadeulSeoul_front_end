import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

// components
import BasicTabs from './Tabs/BasicTabs';
import ProfileCard from './Card/ProfileCard';

// cookie
import { getUserInfo } from '../../common/api/JWT-Token';
// actions
import {
  loadUser,
  UserIdToListItem,
  loadFollowers,
  loadFollowings,
  followinfoToList,
} from './MyPageSlice';

function MyPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.mypage);
  // 서버에 유저정보 요청
  useEffect(() => {
    dispatch(loadUser(params.id))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  // userId to BoradListItem
  // 쿠키에 있는 로그인한 유저 아이디 넘기기
  useEffect(() => {
    dispatch(UserIdToListItem(getUserInfo().userSeq));
  });

  // 로그인한 사람의 팔로잉 팔로우 정보 가져오기
  useEffect(() => {
    dispatch(loadFollowers(getUserInfo().userSeq))
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(followinfoToList(response.data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    dispatch(loadFollowings(getUserInfo().userSeq))
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(followinfoToList(response.data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <>
      <ProfileCard
        userId={user?.userSeq}
        emoji={user?.emoji}
        nickName={user?.nickName}
        followeeCount={user?.followeeCount}
        followerCount={user?.followerCount}
      />
      <BasicTabs />
    </>
  );
}

export default MyPage;

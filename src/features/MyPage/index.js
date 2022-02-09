import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import BasicTabs from './Tabs/BasicTabs';
import ProfileCard from './Card/ProfileCard';

// actions
import { loadUser, UserIdToListItem } from './MyPageSlice';

function MyPage() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.mypage);

  console.log(userInfo.data);
  // 서버에 유저정보 요청
  useEffect(() => {
    dispatch(loadUser(userInfo[0].id))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  // userId to BoradListItem
  useEffect(() => {
    dispatch(UserIdToListItem(userInfo.id));
  });
  return (
    <>
      <ProfileCard />
      <BasicTabs />
    </>
  );
}

export default MyPage;

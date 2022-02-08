import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// check
import { toast } from 'react-toastify';

// components
import BasicTabs from './Tabs/BasicTabs';
import ProfileCard from './Card/ProfileCard';

// actions
import { loadUser, UserIdToListItem } from './MyPageSlice';

function MyPage() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.mypage);

  // 서버에 유저정보 요청
  useEffect(() => {
    dispatch(loadUser(userInfo[0].id))
      .unwrap()
      .then(() => {
        toast.success('불러오기에 성공');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [userInfo]);

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

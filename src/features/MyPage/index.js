import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';

// components
import BasicTabs from './Tabs/BasicTabs';
import ProfileCard from './Card/ProfileCard';

// actions
import // loadUser,
// UserIdToListItem,
// loadFollowers,
// loadFollowings,
// followinfoToList,
'./MyPageSlice';

function MyPage() {
  // const dispatch = useDispatch();
  // const params = useParams();
  // const { userInfo, user } = useSelector((state) => state.mypage);
  // 서버에 유저정보 요청

  // console.log(params.id);
  // useEffect(() => {
  //   dispatch(loadUser(params.id))
  //     .unwrap()
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }, []);

  // // userId to BoradListItem
  // useEffect(() => {
  //   dispatch(UserIdToListItem(userInfo.id));
  // });

  // // 로그인한 사람의 팔로잉 팔로우 정보 가져오기
  // useEffect(() => {
  //   dispatch(loadFollowers(1))
  //     .unwrap()
  //     .then((response) => {
  //       console.log(response);
  //       dispatch(followinfoToList(response.data));
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  //   dispatch(loadFollowings(1))
  //     .unwrap()
  //     .then((response) => {
  //       console.log(response);
  //       dispatch(followinfoToList(response.data));
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }, []);
  return (
    <>
      <ProfileCard />
      <BasicTabs />
    </>
  );
}

export default MyPage;

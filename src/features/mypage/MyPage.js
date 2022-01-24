import React from 'react';
import BasicTabs from './Tabs/BasicTabs';
import ProfileCard from './Card/ProfileCard';

function MyPage() {
  return (
    <>
      <h1>Mypage</h1>
      <ProfileCard />
      <BasicTabs />
    </>
  );
}

export default MyPage;

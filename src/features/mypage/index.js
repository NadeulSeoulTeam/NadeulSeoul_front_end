import React from 'react';
import BasicTabs from './Tabs/BasicTabs';
import ProfileCard from './Card/ProfileCard';

// actions

function MyPage() {
  return (
    <>
      <ProfileCard />
      <BasicTabs />
    </>
  );
}

export default MyPage;

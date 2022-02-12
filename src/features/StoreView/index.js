import React from 'react';
import StoreMap from './StoreMap';
import StoreSearch from './StoreSearch';
import StoreList from './StoreList';
import StoreCard from './StoreInfo';

function StoreView() {
  return (
    <div>
      <StoreMap />
      <StoreSearch />
      <StoreList />
      <StoreCard />
    </div>
  );
}

export default StoreView;

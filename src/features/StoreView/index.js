import React from 'react';
import { useLocation } from 'react-router';
import StoreMap from './StoreMap';
import StoreSearch from './StoreSearch';
import StoreList from './StoreList';
import StoreCard from './StoreInfo';

function StoreView() {
  const { state } = useLocation();

  return (
    <div>
      <StoreMap />
      <StoreSearch searchKeyword={state} />
      <StoreList />
      <StoreCard />
    </div>
  );
}

export default StoreView;

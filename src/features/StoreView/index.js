import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import StoreMap from './StoreMap';
import StoreSearch from './StoreSearch';
import StoreList from './StoreList';
import StoreCard from './StoreInfo';

function StoreView() {
  const { state } = useLocation();
  useEffect(() => {
    console.log(state);
  }, []);
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

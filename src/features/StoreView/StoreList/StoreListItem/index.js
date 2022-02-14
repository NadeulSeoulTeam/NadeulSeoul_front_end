import React, { useEffect } from 'react';

// material UI

// css
import { StoreCard, Store, StoreName, StoreDescription } from './styles';

function StoreListItem({ addToCart, search, index, active }) {
  useEffect(() => {
    console.log('courselistitem start');
    console.log(search);
  }, []);

  return (
    <StoreCard
      sx={{
        minWidth: 275,
        minHeight: 100,
        backgroundColor: active ? '#0de073' : '',
      }}
      onClick={() => addToCart(search, index)}
    >
      <Store>
        <StoreName active={active}>{search.place_name}</StoreName>
        <StoreDescription active={active}>
          {search.address_name}
        </StoreDescription>
      </Store>
    </StoreCard>
  );
}

export default StoreListItem;

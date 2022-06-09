import React from 'react';

// material UI

// css
import { StoreCard, StoreName, StoreDescription } from './styles';

function StoreListItem({ addToCart, search, index, active }) {
  return (
    <StoreCard active={active} onClick={() => addToCart(search, index)}>
      <StoreName active={active}>{search.place_name}</StoreName>
      <StoreDescription active={active}>{search.address_name}</StoreDescription>
      <StoreDescription active={active}>
        {search.category_name}
      </StoreDescription>
    </StoreCard>
  );
}

export default StoreListItem;

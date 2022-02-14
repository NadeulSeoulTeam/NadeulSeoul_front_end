/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// material UI

// css
import { StoreCard, Store, StoreName, StoreDescription } from './styles';

function CourseListItem({ addToCart, search, index }) {
  useEffect(() => {
    console.log('courselistitem start');
    console.log(search);
  }, []);

  return (
    <StoreCard
      sx={{ minWidth: 275, minHeight: 100 }}
      onClick={() => addToCart(search, index)}
    >
      <Store>
        <StoreName>{search.place_name}</StoreName>
        <StoreDescription>{search.address_name}</StoreDescription>
      </Store>
    </StoreCard>
  );
}

export default CourseListItem;

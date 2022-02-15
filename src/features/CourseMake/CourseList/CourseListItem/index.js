/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// material UI

// css
import { StoreCard, StoreName, StoreDescription } from './styles';

function CourseListItem({ addToCart, search, index, active }) {
  useEffect(() => {
    console.log('courselistitem start');
    console.log(search);
  }, []);

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

export default CourseListItem;

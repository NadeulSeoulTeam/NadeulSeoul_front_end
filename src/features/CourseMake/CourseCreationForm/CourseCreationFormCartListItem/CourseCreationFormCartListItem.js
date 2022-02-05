import React from 'react';
import { useDispatch } from 'react-redux';

// material UI

import Button from '@mui/material/Button';

import { deleteCourse } from '../../CourseSlice';

import { StoreCard, Store, StoreName, StoreDescription } from './styles';

function CourseCreationFormCartListItem({ cart }) {
  const dispatch = useDispatch();

  const deleteCourseSelected = (selectedCart) => {
    dispatch(deleteCourse(selectedCart));
  };
  return (
    <StoreCard sx={{ minWidth: 275, minHeight: 100 }}>
      <Store>
        <StoreName>{cart.place_name}</StoreName>
        <StoreDescription>{cart.address_name}</StoreDescription>
      </Store>
      <Button onClick={() => deleteCourseSelected(cart)}>삭제</Button>
    </StoreCard>
  );
}
export default CourseCreationFormCartListItem;

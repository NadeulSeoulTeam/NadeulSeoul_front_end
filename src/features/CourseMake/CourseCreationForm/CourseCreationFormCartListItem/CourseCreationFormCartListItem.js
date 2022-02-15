import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material UI

import { deleteCourse, getCourse } from '../../CourseSlice';

import { StoreCard, StoreName, StoreDescription, DeleteButton } from './styles';

function CourseCreationFormCartListItem({ cart }) {
  const dispatch = useDispatch();
  const carts = useSelector(getCourse);

  const deleteCourseSelected = (selectedCart) => {
    if (carts.length === 1) {
      alert('장소는 1개 이상이어야 합니다.');
      return;
    }

    dispatch(deleteCourse(selectedCart));
  };
  return (
    <StoreCard>
      <StoreName>{cart.place_name}</StoreName>
      <StoreDescription>{cart.address_name}</StoreDescription>
      <StoreDescription>{cart.category_name}</StoreDescription>
      <DeleteButton onClick={() => deleteCourseSelected(cart)} />
    </StoreCard>
  );
}
export default CourseCreationFormCartListItem;

import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteCourse } from '../../CourseSlice';
import {
  StoreName,
  StoreOrder,
  Store,
  StoreDescription,
  DeleteButton,
} from './styles';

function CourseCartItem({ cart, index }) {
  const dispatch = useDispatch();

  const deleteCourseSelected = (selectedCart) => {
    dispatch(deleteCourse(selectedCart));
  };
  return (
    <Store>
      <StoreOrder>{index + 1}</StoreOrder>
      <StoreName>{cart.place_name}</StoreName>
      <StoreDescription>{cart.address_name}</StoreDescription>
      <DeleteButton onClick={() => deleteCourseSelected(cart)}>
        삭제
      </DeleteButton>
    </Store>
  );
}
export default CourseCartItem;

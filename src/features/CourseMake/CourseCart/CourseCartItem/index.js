import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteCourse } from '../../CourseSlice';
import {
  Store,
  StoreDiv,
  StoreName,
  StoreOrder,
  StoreOrderNum,
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
      <StoreOrder>
        <StoreOrderNum>{index + 1}</StoreOrderNum>
      </StoreOrder>
      <StoreDiv>
        <StoreName>{cart.place_name}</StoreName>
        <StoreDescription>{cart.address_name}</StoreDescription>
      </StoreDiv>
      <DeleteButton onClick={() => deleteCourseSelected(cart)} />
    </Store>
  );
}
export default CourseCartItem;

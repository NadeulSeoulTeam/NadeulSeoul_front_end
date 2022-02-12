import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material UI

import { deleteCourse, getCourse } from '../../CourseSlice';

import {
  StoreCard,
  Store,
  StoreName,
  StoreDescription,
  DeleteButton,
} from './styles';

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
    <StoreCard sx={{ minWidth: 200, minHeight: 100 }}>
      <Store>
        <StoreName>{cart.place_name}</StoreName>
        <StoreDescription>{cart.address_name}</StoreDescription>
      </Store>
      <DeleteButton
        sx={{ fontSize: 20, color: '#68c78e' }}
        onClick={() => deleteCourseSelected(cart)}
      />
    </StoreCard>
  );
}
export default CourseCreationFormCartListItem;

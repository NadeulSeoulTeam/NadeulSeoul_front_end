import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { deleteCourse } from './CourseSlice';

function CourseCartItem({ cart }) {
  const dispatch = useDispatch();

  const deleteCourseSelected = (selectedCart) => {
    dispatch(deleteCourse(selectedCart));
  };
  return (
    <div>
      <Typography variant="body2">{cart.place_name}</Typography>
      <Typography variant="body2">{cart.address_name}</Typography>
      <Button onClick={() => deleteCourseSelected(cart)}>삭제</Button>
    </div>
  );
}
export default CourseCartItem;

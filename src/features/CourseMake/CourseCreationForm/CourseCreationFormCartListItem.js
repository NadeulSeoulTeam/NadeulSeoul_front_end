import React from 'react';
import { useDispatch } from 'react-redux';

// material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { deleteCourse } from '../CourseSlice';

function CourseCreationFormCartListItem({ cart }) {
  const dispatch = useDispatch();

  const deleteCourseSelected = (selectedCart) => {
    dispatch(deleteCourse(selectedCart));
  };
  return (
    <Card className="creation_cart" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Typography className="placeName" variant="body4">
            {cart.place_name}
          </Typography>
          <Typography className="addressName" variant="body2">
            {cart.address_name}
          </Typography>
        </Typography>
        <Button onClick={() => deleteCourseSelected(cart)}>삭제</Button>
      </CardContent>
    </Card>
  );
}
export default CourseCreationFormCartListItem;

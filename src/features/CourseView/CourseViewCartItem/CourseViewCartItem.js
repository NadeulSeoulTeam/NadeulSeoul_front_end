import React from 'react';
import Typography from '@mui/material/Typography';

function CourseViewCartItem({ cart }) {
  return (
    <div>
      <Typography variant="body2">{cart.place_name}</Typography>
      <Typography variant="body2">{cart.address_name}</Typography>
    </div>
  );
}
export default CourseViewCartItem;

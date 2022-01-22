import React, { useEffect } from 'react';

// material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// css
import './Course.css';

function CourseListItem({ addToCart, search }) {
  useEffect(() => {
    console.log('courselistitem start');
    console.log(search);
  }, []);

  return (
    <div>
      <Card sx={{ minWidth: 275 }} onClick={() => addToCart(search)}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Typography className="placeName" variant="body4">
              {search.place_name}
            </Typography>
            <Typography className="addressName" variant="body2">
              {search.address_name}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CourseListItem;

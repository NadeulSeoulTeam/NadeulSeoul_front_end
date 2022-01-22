import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// css
import './Course.css';

import { getCourse, addCourse } from './CourseSlice';

function CourseList() {
  const carts = useSelector(getCourse);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(carts);
  }, [carts]);

  // course 나열 함수
  // eslint 는 key값으로 array의 인덱스를 사용하지 말라한다.... ????
  const mapToComponent = (data) => {
    return data.map((cart) => (
      <div>
        <Typography variant="body2">{cart.name}</Typography>
        <Typography variant="body2">{cart.address}</Typography>
      </div>
    ));
  };

  return (
    <Card className="list" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          내 코스에 추가할 장소
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {mapToComponent(carts)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(addCourse())}>
          test
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseList;

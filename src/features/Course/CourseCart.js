import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// css
import './Course.css';

import CourseCartItem from './CourseCartItem';

import { getCourse } from './CourseSlice';

function CourseCart() {
  // 현재 카트에 리스트가 저장되어있는 배열
  const carts = useSelector(getCourse);

  // Navigation
  const navigate = useNavigate();
  useEffect(() => {
    console.log(carts);
  }, [carts]);

  // course 나열 함수
  // eslint 는 key값으로 array의 인덱스를 사용하지 말라한다.... ????
  // id로 구분하기
  const mapToComponent = (data) => {
    console.log(data);
    return data.map((cart) => (
      <div>
        <CourseCartItem cart={cart} />
      </div>
    ));
  };

  return (
    <Card className="cart" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          내 코스에 추가할 장소
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {mapToComponent(carts)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/CourseCreationForm`);
          }}
        >
          이대로 코스 생성하기
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCart;

/* <div className="CourseCart">
      <div className="Course Header"></div>
      {mapToComponent(carts)}
      
    </div> */

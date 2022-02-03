import React, { useEffect, useState } from 'react';

// material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// css
import './CourseView.css';

// import CourseViewCartItem from './CourseViewCartItem';
// dummy data
import testdata from './testdata';

function CourseViewCart() {
  // eslint-disable-next-line no-unused-vars
  const [course, setCourse] = useState(testdata);
  // 현재 카트에 리스트가 저장되어있는 배열
  useEffect(() => {
    if (course.status === '200') {
      console.log('good');
    } else if (course.status === '404') {
      console.log('bad');
    }
  }, [course]);
  const mapTransportationToComponent = () => {
    return course.data.transportation.map((transportation) => (
      <li>{transportation}</li>
    ));
  };
  const mapCommentToComponent = () => {
    return course.data.comments.map((comment) => (
      <div>
        <Typography sx={{ fontSize: 8 }} color="text.secondary" gutterBottom>
          {comment.user_nickname}
        </Typography>
        <Typography sx={{ fontSize: 8 }} color="text.secondary" gutterBottom>
          {comment.content}
        </Typography>
      </div>
    ));
  };
  return (
    <Card className="cart" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {course.data.member_nickname}의 나들코스
        </Typography>
        <Typography sx={{ fontSize: 8 }} color="text.secondary" gutterBottom>
          {course.data.desc}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          교통편
          {mapTransportationToComponent()}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          코스예산:
          {course.data.budget}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          함께 한 인원:
          {course.data.fixed_people}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">따봉</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          댓글
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {mapCommentToComponent()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CourseViewCart;

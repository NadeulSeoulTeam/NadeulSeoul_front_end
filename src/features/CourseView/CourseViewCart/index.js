import React, { useEffect, useState } from 'react';

// material UI
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import CardContent from '@mui/material/CardContent';

// import Typography from '@mui/material/Typography';
// css
import {
  Nickname,
  AfterNickname,
  CourseCart,
  Description,
  Sub1,
  Sub2,
  Sub3,
  Content1,
  Content2,
  Content3,
  List,
  ProfileBox,
  CommentBox,
  Cart,
  UserBox,
  UserComment,
  EachComment,
} from './styles';
// import CourseViewCartItem from './CourseViewCartItem';
// dummy data
import testdata from '../testdata';

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
      <List>{transportation}</List>
    ));
  };
  const mapCommentToComponent = () => {
    return course.data.comments.map((comment) => (
      <EachComment>
        <ProfileBox>프로필</ProfileBox>
        <UserBox>{comment.user_nickname}</UserBox>
        <CommentBox>{comment.content}</CommentBox>
      </EachComment>
    ));
  };
  return (
    <Cart>
      <Card>
        <CourseCart>
          <Nickname>{course.data.member_nickname}</Nickname>
          <AfterNickname>의 나들코스</AfterNickname>
          <Description>{course.data.desc}</Description>
          <Sub1>교통편</Sub1>
          <Content1>{mapTransportationToComponent()}</Content1>
          <Sub2>코스예산:</Sub2>
          <Content2>{course.data.budget}</Content2>
          <Sub3>함께 한 인원:</Sub3>
          <Content3>{course.data.fixed_people}</Content3>
          {/* <CardActions>
          <Button size="small">따봉</Button>
        </CardActions> */}

          <UserComment>{mapCommentToComponent()}</UserComment>
        </CourseCart>
      </Card>
    </Cart>
  );
}

export default CourseViewCart;

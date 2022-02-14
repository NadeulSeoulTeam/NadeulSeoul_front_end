/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// material UI
// import Card from '@mui/material/Card';

// css
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import {
  Container,
  // CourseInfo,
  RightDiv,
  Nickname,
  AfterNickname,
  // CourseCart,
  Description,
  SubTitle,
  Content,
  Transportation,
  GreenDash,
  CommentArea,
  CommentCreationArea,
  ProfileEmoji,
  CommentNickname,
  CommentContent,
  TextInput,
  CommentBtn,
  // Sub1,
  // Sub2,
  // Sub3,
  // Content1,
  // Content2,
  // Content3,
  // List,
  // ProfileBox,
  // CommentBox,
  // Cart,
  // UserBox,
  // UserComment,
  // EachComment,
  // Comment,
  // Button,
  LikeButton,
} from './styles';
// dummy data
import testdata from '../testdata';
import { sendComment, clickLike, clickLikeCancel } from '../CourseViewSlice';

function CourseViewCart() {
  const [course, setCourse] = useState(testdata);
  // 이 시점에서 getCourseInfo?
  const [user, setUser] = useState(true);
  const [userComment, setUserComment] = useState('');
  const [likeClicked, setLikeClicked] = useState(false);
  const dispatch = useDispatch();
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
      // <List>{transportation}</List>
      <Transportation>{transportation}</Transportation>
    ));
  };

  const mapCommentToComponent = () => {
    return course.data.comments.map((comment) => (
      <div style={{ margin: '10px 0', display: 'flex' }}>
        <ProfileEmoji>프로필</ProfileEmoji>
        <div style={{ margin: '0 0 0 5px', display: 'inline-block' }}>
          <CommentNickname>{comment.user_nickname}</CommentNickname>
          <CommentContent>{comment.content}</CommentContent>
        </div>
      </div>
    ));
  };

  // const mapCommentToComponent = () => {
  //   return course.data.comments.map((comment) => (
  //     <EachComment>
  //       <ProfileBox>프로필</ProfileBox>
  //       <UserBox>{comment.user_nickname}</UserBox>
  //       <CommentBox>{comment.content}</CommentBox>
  //     </EachComment>
  //   ));
  // };

  const commentWrite = (e) => {
    console.log(e.target.value);
    setUserComment(e.target.value);
  };
  const putComment = () => {
    dispatch(sendComment(userComment));
    // 댓글 비동기 통신 다시하기
  };
  const userClickLike = () => {
    // 비동기 통신
    if (likeClicked) {
      // true->false
      dispatch(clickLikeCancel());
    } else {
      // false->true
      const formData = new FormData();
      formData.append('member_seq', user.member_seq);
      formData.append('curation_seq', course.curation_seq);
      dispatch(clickLike(formData));
    }
    setLikeClicked(!likeClicked);
  };
  return (
    <Container>
      <RightDiv>
        <Nickname>{course.data.member_nickname}</Nickname>
        <AfterNickname>의 나들코스</AfterNickname>
      </RightDiv>
      <Description>{course.data.desc}</Description>
      <div style={{ display: 'inline-block' }}>
        <SubTitle>교통편</SubTitle>
        <SubTitle>코스 예산</SubTitle>
        <SubTitle>함께 한 인원</SubTitle>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Content>{mapTransportationToComponent()}</Content>
        <Content>{course.data.budget}</Content>
        <Content>{course.data.fixed_people}</Content>
      </div>
      <LikeButton variant="outlined">👍</LikeButton>
      <GreenDash />
      <CommentArea>{mapCommentToComponent()}</CommentArea>
      <CommentCreationArea>
        {user && (
          <TextInput
            size="small"
            onChange={commentWrite}
            placeholder="댓글을 남겨주세요!"
          />
        )}
        {user && (
          <CommentBtn size="medium" onClick={putComment}>
            작성
          </CommentBtn>
        )}
      </CommentCreationArea>
    </Container>
    // <Container>
    //   <CourseCart>
    //     <Nickname>{course.data.member_nickname}</Nickname>
    //     <AfterNickname>의 나들코스</AfterNickname>
    //     <Description>{course.data.desc}</Description>
    //     <Sub1>교통편</Sub1>
    //     <Content1>{mapTransportationToComponent()}</Content1>
    //     <Sub2>코스예산:</Sub2>
    //     <Content2>{course.data.budget}</Content2>
    //     <Sub3>함께 한 인원:</Sub3>
    //     <Content3>{course.data.fixed_people}</Content3>
    //     <LikeButton
    //       active={!!likeClicked}
    //       type="submit"
    //       onClick={userClickLike}
    //     >
    //       👍
    //     </LikeButton>
    //     <UserComment>
    //       {mapCommentToComponent()}
    //       {user && (
    //         <Comment onChange={commentWrite} placeholder="댓글을 남겨주세요!" />
    //       )}
    //       {user && <Button onClick={putComment}>작성</Button>}
    //     </UserComment>
    //   </CourseCart>
    // </Container>
  );
}

export default CourseViewCart;

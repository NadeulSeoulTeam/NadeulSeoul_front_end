/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material UI
// import Card from '@mui/material/Card';

// css
import {
  Container,
  RightDiv,
  Nickname,
  AfterNickname,
  Picture,
  MorePic,
  Description,
  SubTitle,
  Content,
  Transportation,
  BtnExplain,
  LikeBtn,
  GreenDash,
  CommentArea,
  CommentCreationArea,
  ProfileEmoji,
  CommentNickname,
  CommentContent,
  TextInput,
  CommentBtn,
} from './styles';

// dummy data
import testdata from '../testdata';
import {
  sendComment,
  clickLike,
  clickLikeCancel,
  getCommentList,
} from '../CourseViewSlice';
import CourseViewComment from './CourseViewComment';

function CourseViewCart({ curationSeq }) {
  const dispatch = useDispatch();
  const [course, setCourse] = useState(testdata);
  // 이 시점에서 getCourseInfo?
  const [user, setUser] = useState(true);
  const [commentWrote, setCommentWrote] = useState(false);
  const [userComment, setUserComment] = useState();
  const [likeClicked, setLikeClicked] = useState(false);
  const { getComment } = useSelector((state) => state.courseView);
  // 현재 카트에 리스트가 저장되어있는 배열
  useEffect(() => {
    dispatch(getCommentList({ curationSeq, pageNumber: 0, pageSize: 10 }));
  }, []);

  // 댓글 작성 리랜더링
  useEffect(() => {
    dispatch(getCommentList({ curationSeq, pageNumber: 0, pageSize: 10 }));
  }, [commentWrote]);
  const mapTransportationToComponent = () => {
    return course.data.transportation.map((transportation) => (
      <Transportation>{transportation}</Transportation>
    ));
  };

  const mapCommentToComponent = () => {
    if (getComment === undefined) return <div />;

    return getComment.content
      .slice(0)
      .reverse()
      .map((comment) => (
        // return course.data.comments.map((comment) => (
        <div style={{ margin: '10px 0', display: 'flex' }}>
          <ProfileEmoji>프로필</ProfileEmoji>
          {/* <div style={{ margin: '0 0 0 5px', display: 'inline-block' }}>
          <CommentNickname>{comment.user.userSeq}</CommentNickname>
          <CommentContent>{comment.content}</CommentContent>
        </div> */}
          <CourseViewComment
            userSeq={comment.user.userSeq}
            content={comment.content}
          />
          {/* <CourseViewComment
          userSeq={comment.user_nickname}
          content={comment.content}
        /> */}
        </div>
      ));
  };

  const commentWrite = (e) => {
    setUserComment(e.target.value);
  };

  const putComment = () => {
    dispatch(sendComment({ content: userComment, curationSeq }))
      .then(() => {
        setCommentWrote(!commentWrote);
      })
      .then(() => {
        setUserComment('');
        console.log(commentWrote);
      });
    // 댓글 비동기 통신 다시하기
  };

  const userClickLike = () => {
    // 비동기 통신
    if (likeClicked) {
      // true->false
      dispatch(clickLikeCancel());
    } else {
      // false->true
      // const formData = new FormData();
      // formData.append('member_seq', user.member_seq);
      // formData.append('curation_seq', course.curation_seq);
      dispatch(clickLike(user.member_seq));
    }
    setLikeClicked(!likeClicked);
  };

  return (
    <Container>
      <RightDiv>
        <Nickname>{course.data.member_nickname}</Nickname>
        <AfterNickname>의 나들코스</AfterNickname>
      </RightDiv>
      <Picture>
        사진자리
        <MorePic>사진 더보기</MorePic>
      </Picture>
      <Description>{course.data.desc}</Description>
      <div style={{ display: 'inline-block' }}>
        <SubTitle>교통편</SubTitle>
        <SubTitle>코스 예산</SubTitle>
        <SubTitle>함께 한 인원</SubTitle>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Content>
          {getComment !== undefined} && {mapTransportationToComponent}
        </Content>
        <Content>{course.data.budget}원 / 1인</Content>
        <Content>{course.data.fixed_people}</Content>
      </div>
      <div style={{ textAlign: 'end', padding: '0 1.5rem' }}>
        <BtnExplain>눌러서 좋아요 표시하기</BtnExplain>
        <LikeBtn active={!!likeClicked} type="submit" onClick={userClickLike}>
          👍
        </LikeBtn>
      </div>
      <GreenDash />
      <CommentArea>{mapCommentToComponent()}</CommentArea>
      <CommentCreationArea>
        {user && (
          <TextInput
            size="small"
            value={userComment}
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
  );
}

export default CourseViewCart;

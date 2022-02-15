/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
// material UI
// import Card from '@mui/material/Card';

// css
import axios from 'axios';
import {
  Container,
  RightDiv,
  Nickname,
  AfterNickname,
  Picture,
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
  Thumbnail,
} from './styles';

// dummy data
import testdata from '../testdata';
import {
  sendComment,
  clickLike,
  clickLikeCancel,
  getCommentList,
  isLike,
} from '../CourseViewSlice';
import CourseViewComment from './CourseViewComment';
import CourseStoreLoad from '../CourseStoreLoad';

function CourseViewCart({ curationSeq }) {
  const dispatch = useDispatch();
  const [course, setCourse] = useState(testdata);
  // 이 시점에서 getCourseInfo?
  const [user, setUser] = useState(true);
  const [commentWrote, setCommentWrote] = useState(false);
  const [userComment, setUserComment] = useState();
  const [likeClicked, setLikeClicked] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const { getComment, isLiked } = useSelector((state) => state.courseView);
  // 현재 카트에 리스트가 저장되어있는 배열

  // infinite scroll
  const [ref, inView] = useInView();

  // 댓글 작성 리랜더링
  useEffect(() => {
    dispatch(getCommentList({ curationSeq, pageNumber: 0, pageSize: 10 }));
  }, [commentWrote]);
  // 좋아요 리랜더링
  useEffect(() => {
    dispatch(isLike({ curationSeq }));
  }, [likeClicked]);
  // 무한 스크롤 리랜더링
  const getComments = useCallback(async () => {
    setLoading(true);
    await axios.get().then((res) => {
      setComments((prevState) => [...prevState, res]);
    });
    setLoading(false);
  }, [page]);
  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  const mapTransportationToComponent = () => {
    return course.data.transportation.map((transportation) => (
      <Transportation>{transportation}</Transportation>
    ));
  };

  const mapCommentToComponent = () => {
    // if (getComment === undefined) return <div />;
    console.log(course.data.comments);
    return (
      course.data.comments
        // return getComment.content
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
            {/*
             <CourseViewComment
              userSeq={comment.user.userSeq}
              content={comment.content}
            /> */}
            <CourseViewComment
              userSeq={comment.user_nickname}
              content={comment.content}
            />
          </div>
        ))
    );
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
    if (isLiked) {
      // true->false
      dispatch(clickLikeCancel({ curationSeq }));
    } else {
      // false->true
      // const formData = new FormData();
      // formData.append('member_seq', user.member_seq);
      // formData.append('curation_seq', course.curation_seq);
      dispatch(clickLike({ curationSeq }));
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
        <Thumbnail src="/test_img/0.JPG" />
        <CourseStoreLoad>사진 더보기</CourseStoreLoad>
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
        <LikeBtn active={!!isLiked} type="submit" onClick={userClickLike}>
          👍
        </LikeBtn>
      </div>
      <GreenDash />
      <CommentArea>
        {mapCommentToComponent()}
        <div ref={ref}>Element</div>
      </CommentArea>
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

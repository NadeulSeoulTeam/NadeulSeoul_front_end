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
  setCommentStartEmpty,
} from '../CourseViewSlice';
import CourseViewComment from './CourseViewComment';
import CourseStoreLoad from '../CourseStoreLoad';

function CourseViewCart({ curationSeq, courseInfo }) {
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
  const [infComment, setInfComment] = useState([]);
  const { getComment, isLiked } = useSelector((state) => state.courseView);

  // infinite scroll
  const [ref, inView] = useInView();
  useEffect(() => {
    dispatch(setCommentStartEmpty());
  }, []);
  // 댓글 작성 리랜더링
  useEffect(() => {
    setLoading(true);
    dispatch(getCommentList({ curationSeq, pageNumber: page, pageSize: 10 }));
    setLoading(false);
  }, [commentWrote, page]);
  // 좋아요 리랜더링
  useEffect(() => {
    dispatch(isLike({ curationSeq }));
  }, [likeClicked]);
  // 무한 스크롤 리랜더링
  // useEffect(() => {
  //   dispatch(getCommentList({ curationSeq, pageNumber: page, pageSize: 10 }));
  // }, [page]);
  // const getComments = useCallback(async () => {
  //   setLoading(true);
  //   await axios
  //     .get(`/api/v1/curations/comments/${curationSeq}?page=${page}&size=${10}`)
  //     .then((res) => {
  //       setComments((prevState) => [...prevState, res]);
  //     })
  //     .then(() => console.log(comments));

  //   setLoading(false);
  // }, [page]);
  // useEffect(() => {
  //   getComments();
  // }, []);
  useEffect(() => {
    console.log(inView);
    if (inView && !loading) {
      console.log('here');
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);
  useEffect(() => {}, [comments]);
  const mapTransportationToComponent = () => {
    return course.data.transportation.map((transportation) => (
      <Transportation>{transportation}</Transportation>
    ));
  };

  const mapCommentToComponent = () => {
    console.log(getComment);
    if (getComment.length === 0) {
      return <div />;
    }
    const appendComment = getComment
      // .slice(0)
      // .reverse()
      .map((comment, idx) =>
        getComment.length - 1 === idx ? (
          <div style={{ margin: '10px 0', display: 'flex' }} ref={ref}>
            <ProfileEmoji>프로필</ProfileEmoji>
            <CourseViewComment
              userSeq={comment.user.nickname}
              content={comment.content}
            />
          </div>
        ) : (
          <div style={{ margin: '10px 0', display: 'flex' }}>
            <ProfileEmoji>프로필</ProfileEmoji>
            <CourseViewComment
              userSeq={comment.user.nickname}
              content={comment.content}
            />
          </div>
        )
      );
    return appendComment;
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
        <Nickname>넣어야댐</Nickname>
        <AfterNickname>의 나들코스</AfterNickname>
      </RightDiv>
      {/* 사진 없을 때에는 아예 이 부분 렌더링 안 되게 해야 함!!! */}
      <Picture>
        <Thumbnail src="/test_img/0.JPG" />
        <CourseStoreLoad>사진 더보기</CourseStoreLoad>
      </Picture>
      <Description>{courseInfo.description}</Description>
      <div style={{ display: 'inline-block' }}>
        <SubTitle>교통편</SubTitle>
        <SubTitle>코스 예산</SubTitle>
        <SubTitle>함께 한 인원</SubTitle>
      </div>
      <div style={{ display: 'inline-block' }}>
        {courseInfo.transportation === undefined ? (
          <Content />
        ) : (
          <Content>교통수단</Content>
        )}
        {courseInfo.budget === null ? (
          <Content />
        ) : (
          <Content>{courseInfo.budget}원 / 1인</Content>
        )}
        {courseInfo.personnel === null ? (
          <Content />
        ) : (
          <Content>{courseInfo.personnel}</Content>
        )}
      </div>
      <div style={{ textAlign: 'end', padding: '0 1.5rem' }}>
        <BtnExplain>눌러서 좋아요 표시하기</BtnExplain>
        <LikeBtn active={!!isLiked} type="submit" onClick={userClickLike}>
          👍
        </LikeBtn>
      </div>
      {/* <div style={{ textAlign: 'end', padding: '0 1.5rem' }}>
        <BtnExplain>눌러서 코스 삭제</BtnExplain>
        <LikeBtn active={} type="submit" onClick={}>
          🧨
        </LikeBtn>
      </div> */}
      <GreenDash />
      {/* CommentArea 길이 css 수정은 완료 hasPics={hasPics} 로 넘겨주세요 */}
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

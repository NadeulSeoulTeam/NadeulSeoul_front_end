/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material UI
// import Card from '@mui/material/Card';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { getUserInfo } from '../../../common/api/JWT-Token';
// css
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
import {
  sendComment,
  clickLike,
  clickLikeCancel,
  getCommentList,
  isLike,
  setCommentStartEmpty,
  deleteCourseInfo,
} from '../CourseViewSlice';
import CourseViewComment from './CourseViewComment';
import CourseStoreLoad from '../CourseStoreLoad';

function CourseViewCart({ curationSeq, courseInfo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 이 시점에서 getCourseInfo?
  const [user, setUser] = useState(true);
  const [commentWrote, setCommentWrote] = useState(false);
  const [userComment, setUserComment] = useState();
  const [likeClicked, setLikeClicked] = useState(false);
  const [page, setPage] = useState(0);
  const [comments, setComments] = useState([]);
  const [infComment, setInfComment] = useState([]);
  const { getComment, isLiked, totalPages } = useSelector(
    (state) => state.courseView
  );
  const [userSeqCookie, setUserSeqCookie] = useState(getUserInfo('userinfo'));
  // pagination을 위한 page state
  const [pageNo, setPageNo] = useState(1);
  // infinite scroll
  // page 변화시 필요한 useEffect
  useEffect(() => {
    // getList();
  }, [pageNo]);
  useEffect(() => {
    dispatch(setCommentStartEmpty());
  }, []);
  useEffect(() => {
    console.log(userSeqCookie, '보여줘!!!!');
    console.log(courseInfo, 'ㅠㅠㅠㅠㅠ');
  }, [userSeqCookie]);
  // 댓글 작성 리랜더링
  useEffect(() => {
    dispatch(getCommentList({ curationSeq, pageNumber: page, pageSize: 6 }));
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
  useEffect(() => {}, [getComment]);

  useEffect(() => {}, [comments]);

  const mapCommentToComponent = () => {
    if (getComment.length === 0) {
      return <div />;
    }

    return getComment.map((comment, idx) =>
      getComment.length - 1 === idx ? (
        <div style={{ margin: '10px 0', display: 'flex' }}>
          <ProfileEmoji>{comment.user.emoji}</ProfileEmoji>
          <CourseViewComment
            userSeq={comment.user.nickname}
            content={comment.content}
          />
        </div>
      ) : (
        <div style={{ margin: '10px 0', display: 'flex' }}>
          <ProfileEmoji>{comment.user.emoji}</ProfileEmoji>
          <CourseViewComment
            userSeq={comment.user.nickname}
            content={comment.content}
          />
        </div>
      )
    );
  };
  const commentWrite = (e) => {
    setUserComment(e.target.value);
  };

  const putComment = () => {
    dispatch(sendComment({ content: userComment, curationSeq }))
      .then(() => {
        console.log(commentWrote, '전');
        dispatch(getCommentList({ curationSeq, pageNumber: 0, pageSize: 10 }));
        setUserComment('');
      })
      .then(() => {
        console.log(commentWrote, '후');
        setCommentWrote(!commentWrote);
      });

    // 댓글 비동기 통신 다시하기
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      putComment();
    }
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
  const userClickTrash = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteCourseInfo({ curationSeq })).then(() => {
        navigate('/');
      });
    }
  };
  const likeButton = () => {
    if (
      courseInfo === null ||
      userSeqCookie === undefined ||
      courseInfo.userinfos === undefined
    ) {
      return <div />;
    }
    if (userSeqCookie.userSeq === courseInfo.userinfos.userSeq) {
      return (
        <div>
          <BtnExplain>눌러서 삭제하기</BtnExplain>
          <LikeBtn active={!!isLiked} type="submit" onClick={userClickTrash}>
            🗑️
          </LikeBtn>
        </div>
      );
    }
    return (
      <div>
        <BtnExplain>눌러서 좋아요 표시하기</BtnExplain>
        <LikeBtn active={!!isLiked} type="submit" onClick={userClickLike}>
          👍
        </LikeBtn>
      </div>
    );
  };
  const onNicknameClick = (seq) => {
    navigate(`/mypage/${seq}`);
  };
  const setPageLeft = () => {
    console.log('왼쪽');
    if (page === 0) return;
    setPage(page - 1);
  };
  const setPageRight = () => {
    console.log('오른쪽');
    if (page === totalPages - 1) return;
    setPage(page + 1);
  };
  return (
    <Container>
      <RightDiv>
        {courseInfo !== null && courseInfo.userinfos !== undefined ? (
          <Nickname
            onClick={() => onNicknameClick(courseInfo.userinfos.userSeq)}
          >
            {courseInfo.userinfos.emoji}
            {courseInfo.userinfos.nickname}
          </Nickname>
        ) : (
          <div />
        )}

        <AfterNickname>의 나들코스</AfterNickname>
      </RightDiv>
      {/* 사진 없을 때에는 아예 이 부분 렌더링 안 되게 해야 함!!! */}
      {courseInfo !== null &&
      courseInfo.fileList !== undefined &&
      courseInfo.fileList.length !== 0 ? (
        <Picture>
          <Thumbnail
            src={`http://13.124.34.5/api/v1/image/${courseInfo.fileList[0]}`}
          />
          <CourseStoreLoad pictureList={courseInfo.fileList} />
        </Picture>
      ) : (
        <Picture>
          <Thumbnail src="http://13.124.34.5/api/v1/image/4" />
          <CourseStoreLoad>사진 더보기</CourseStoreLoad>
        </Picture>
      )}
      {courseInfo !== null && courseInfo.description !== undefined ? (
        <Description>{courseInfo.description}</Description>
      ) : (
        <div />
      )}
      <div style={{ display: 'inline-block' }}>
        <SubTitle>교통편</SubTitle>
        <SubTitle>코스 예산</SubTitle>
        <SubTitle>함께 한 인원</SubTitle>
      </div>
      <div style={{ display: 'inline-block' }}>
        {courseInfo !== null && courseInfo.transportation !== undefined ? (
          <Content>{courseInfo.transportation}</Content>
        ) : (
          // 폰트 작게 해야 할듯
          <div />
        )}
        {courseInfo === null ? (
          <Content />
        ) : (
          <Content>{courseInfo.budget}원 / 1인</Content>
        )}
        {courseInfo === null ? (
          <Content />
        ) : (
          <Content>{courseInfo.personnel}</Content>
        )}
      </div>
      <div style={{ textAlign: 'end', padding: '0 1.5rem' }}>
        {likeButton()}
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
      {/* pagination */}
      <button type="submit" onClick={setPageLeft}>
        왼쪽
      </button>
      <button type="submit" onClick={setPageRight}>
        오른쪽
      </button>
      <CommentCreationArea>
        {user && (
          <TextInput
            size="small"
            value={userComment}
            onChange={commentWrite}
            onKeyPress={onEnter}
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

/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// actions
import { loadBoardListItem } from '../../MyPageSlice';
import BoardListItemAnswer from './BoardListItemAnswer';
import BoardListItemQuestion from './BoardListItemQuestion';

import { Container, Header } from './styles';

// cookie
import { getUserInfo } from '../../../../common/api/JWT-Token';

function BoardListItem() {
  const dispatch = useDispatch();
  const { PostId, singlePost } = useSelector((state) => state.mypage);
  const [loadingFinish, setLoadingFinish] = useState(false);

  // 정리해서 남겨두기 1 useNaviate와 localstorage를 활용해서 새로고침 이후에도 state값 유지시키기
  const [id, setId] = useState();
  const navigateState = useLocation().state;
  const savedPostid = navigateState?.postId;

  window.localStorage.setItem('data', savedPostid);
  const isAdmin = getUserInfo().role !== 'ROLE_MEMBER';

  console.log(savedPostid);
  useEffect(() => {
    const saved = window.localStorage.getItem('data');
    if (saved !== null) {
      setId(saved);
    }
  }, [savedPostid]);
  // 정리해서 남겨두기 2
  // jsx가 리로딩 되기전에, 값을 최신화 업데이트 하고싶을떄,,  componentWillUnmount
  // 게시글, 답변 로딩 -> update를 누른다 -> component did unmount 실행 -> update jsx 실행
  useEffect(() => {
    const data = {
      questionSeq: savedPostid,
    };
    return dispatch(loadBoardListItem(data)).then(() => {
      setLoadingFinish(true);
    });
  }, [PostId]);

  return (
    loadingFinish && (
      <Container>
        <Header>문의 게시글</Header>
        <BoardListItemQuestion
          questionTitle={singlePost?.questionTitle}
          question={singlePost?.question}
          PostId={savedPostid}
        />
        {(singlePost?.answer || isAdmin) && (
          <BoardListItemAnswer
            answer={singlePost?.answer}
            PostId={savedPostid}
            isAdmin={isAdmin}
          />
        )}
      </Container>
    )
  );
}

export default BoardListItem;
// 답글 => 일단 댓글 처럼 구현하자

// 관리자를 어떻게 구분해야 할지,, 그걸 논의 해봐야겠음

// 추가로 구현해야 하는 부분
// 1. 답글은 관리자만 달 수 있음
// 2. 답글이 달린 게시글을 삭제 되면 안됨
// 3. 사용자는 답글을 수정, 삭제 할 수 없음(관리자만 가능)

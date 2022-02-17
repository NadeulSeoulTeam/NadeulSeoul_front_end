/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// custom style
import { Wrapper, UserEmoji, UserName } from './styles';

// actions
import {
  changedMypage,
  loadPostsInfinityLikeNadle,
  loadPostsInfinityLikePlace,
  loadPostsInfinityMyNadle,
} from '../../MyPage/MyPageSlice';

function UserListItem({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const onClickGoToMyPage = () => {
    const data = {
      page,
      size: 10,
      myPageId: user.userSeq,
    };
    dispatch(changedMypage(true));
    navigate(`/mypage/${user.userSeq}`, { state: user.userSeq });
  };
  return (
    <Wrapper elevation={0} onClick={onClickGoToMyPage}>
      <UserEmoji>{user.emoji}</UserEmoji>
      <UserName>{user.nickname}</UserName>
    </Wrapper>
  );
}

export default UserListItem;

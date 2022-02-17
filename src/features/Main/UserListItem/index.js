import React from 'react';
import { useNavigate } from 'react-router-dom';

// custom style
import { Wrapper, UserEmoji, UserName } from './styles';

function UserListItem({ user }) {
  const navigate = useNavigate();
  const onClickGoToMyPage = () => {
    navigate(`/mypage/${user.userSeq}`);
  };
  return (
    <Wrapper elevation={0} onClick={onClickGoToMyPage}>
      <UserEmoji>{user.emoji}</UserEmoji>
      <UserName>{user.nickname}</UserName>
    </Wrapper>
  );
}

export default UserListItem;

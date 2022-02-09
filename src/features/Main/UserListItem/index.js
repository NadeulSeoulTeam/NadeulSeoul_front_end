import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// custom style
import { Wrapper, UserEmoji, UserName } from './styles';

// action
// import { select } from './MainSlice';

function UserListItem({ user }) {
  // const dispatch = useDispatch();

  // const selectUser = (selectedUser) => {
  //   dispatch(select(selectedUser));
  // };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Wrapper
      elevation={0}
      // onClick={() => selectCourse(curation)}
    >
      <UserEmoji>{user.emoji}</UserEmoji>
      <UserName>{user.nickname}</UserName>
    </Wrapper>
  );
}

export default UserListItem;

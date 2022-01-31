import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';

import UserListItem from './UserListItem';

function UserList() {
  const userList = useSelector((state) => state.mainReducer.users);

  const mapToComponent = (data) => {
    console.log('UserList');
    console.log(data);
    return data.map((user) => <UserListItem user={user} />);
  };

  return <Grid container>{mapToComponent(userList)}</Grid>;
}

export default UserList;

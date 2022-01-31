import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// material ui
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    <Card
      sx={{ backgroundColor: 'transparent' }}
      // onClick={() => selectCourse(curation)}
    >
      <Avatar>{user.emoji}</Avatar>
      <CardContent sx={{ px: 0, py: 1 }}>
        <Typography variant="h5" component="div" sx={{ fontSize: '1em' }}>
          {user.nickname}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserListItem;

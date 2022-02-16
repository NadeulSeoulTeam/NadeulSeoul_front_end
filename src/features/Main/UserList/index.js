import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StoreGrid from './styles';

import UserListItem from '../UserListItem';
import { fetchUsers } from '../MainSlice';

function UserList() {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const { users } = useSelector((state) => state.main);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  useEffect(() => {
    console.log(users, 'users!!!!');
  }, [users]);
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const onThrottleDragMove = throttle(onDragMove, 100);

  const mapToComponent = (data) => {
    return data.map((user) => <UserListItem user={user} />);
  };

  return (
    // <Grid container>{mapToComponent(userList)}</Grid>;
    <StoreGrid
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
    >
      {/* {mapToComponent(userList)} */}
      {mapToComponent(users)}
    </StoreGrid>
  );
}

export default UserList;

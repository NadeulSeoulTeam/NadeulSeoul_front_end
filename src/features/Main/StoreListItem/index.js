import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// custom style
import { Wrapper, StoreName, Address, StoreInfo } from './styles';

// action
// import { select } from './MainSlice';

function StoreListItem({ store }) {
  // const dispatch = useDispatch();

  // const selectUser = (selectedUser) => {
  //   dispatch(select(selectedUser));
  // };

  useEffect(() => {}, []);

  return (
    <Wrapper
      elevation={1}
      // onClick={() => selectCourse(curation)}
    >
      {/* <StoreName>{store.title}</StoreName>
      <Address>{store.address}</Address>
      <StoreInfo>{store.category_name}</StoreInfo> */}
      <StoreName>{store.storeName}</StoreName>
      <Address>{store.addressName}</Address>
      <StoreInfo>{store.categoryName}</StoreInfo>
    </Wrapper>
  );
}

export default StoreListItem;

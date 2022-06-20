/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

// actions
import {
  loadPostsInfinityLikePlace,
  getPageCount,
  clearLikePlaces,
} from '../../../MyPageSlice';

// style
import { ContentArea } from '../styles';

// component
import CurationCardLikePlace from '../../../Card/CurationCardLikePlace';

function LikePlacesComponent() {
  const [likePlacepage, setLikePlacepage] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();
  const [myPageId, setMyPageId] = useState(params.id);
  const { LikePlaces } = useSelector((state) => state.mypage);

  useEffect(() => {
    const data = {
      likePlacepage,
      size: 10,
      myPageId,
    };

    dispatch(loadPostsInfinityLikePlace(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(getPageCount(likePlacepage));
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [likePlacepage]);

  function onScrollLikePlace() {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
      setLikePlacepage(likePlacepage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollLikePlace);
    return () => {
      window.removeEventListener('scroll', onScrollLikePlace);
    };
  }, [onScrollLikePlace]);

  useEffect(() => {
    return () => {
      dispatch(clearLikePlaces());
    };
  }, []);

  return (
    <ContentArea>
      {LikePlaces?.length
        ? LikePlaces?.map((v) => (
            <CurationCardLikePlace
              key={Math.random().toString(36).substr(2, 5)}
              storeSeq={v.storeSeq}
              storeName={v.storeName}
              addressName={v.addressName}
              categoryName={v.categoryName}
            />
          ))
        : '찜한 장소가 없습니다.'}
    </ContentArea>
  );
}

export default LikePlacesComponent;

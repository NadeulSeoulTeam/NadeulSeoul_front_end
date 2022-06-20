/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

// actions
import {
  loadPostsInfinityLikeNadle,
  getPageCount,
  clearLikeNadles,
} from '../../../MyPageSlice';

// style
import { ContentArea } from '../styles';

// component
import CurationCard from '../../../Card/CurationCard';

function LikeNadlesComponent() {
  // 찜한 나들 코스

  const { LikeNadles } = useSelector((state) => state.mypage);
  const [likeNadlepage, setLikeNadlepage] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();
  const [myPageId, setMyPageId] = useState(params.id);

  useEffect(() => {
    const data = {
      likeNadlepage,
      size: 10,
      myPageId,
    };
    dispatch(loadPostsInfinityLikeNadle(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(getPageCount(likeNadlepage));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [likeNadlepage]);

  function onScrollLikeNadle() {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
      setLikeNadlepage(likeNadlepage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollLikeNadle);
    return () => {
      window.removeEventListener('scroll', onScrollLikeNadle);
    };
  }, [onScrollLikeNadle]);

  useEffect(() => {
    return () => {
      dispatch(clearLikeNadles());
    };
  }, []);

  return (
    <ContentArea>
      {LikeNadles?.length
        ? LikeNadles?.map((v) => (
            <CurationCard
              // eslint-disable-next-line react/no-array-index-key
              key={Math.random().toString(36).substr(2, 5)}
              title={v.title}
              thumnail={v.thumnail}
              good={v.good}
              curationSeq={v.curationSeq}
            />
          ))
        : '찜한 나들코스가 없습니다.'}
    </ContentArea>
  );
}

export default LikeNadlesComponent;

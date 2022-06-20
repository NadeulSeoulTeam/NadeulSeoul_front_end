/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

// actions
import {
  loadPostsInfinityMyNadle,
  getPageCount,
  claerMyNadles,
} from '../../../MyPageSlice';

// style
import { ContentArea } from '../styles';

// component
import CurationCard from '../../../Card/CurationCard';

function MyNadlesComponent() {
  const { MyNadles } = useSelector((state) => state.mypage);
  const [myNadlepage, setMyNadlepage] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();
  const [myPageId, setMyPageId] = useState(params.id);

  useEffect(() => {
    const data = {
      myNadlepage,
      size: 10,
      myPageId,
    };

    dispatch(loadPostsInfinityMyNadle(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(getPageCount(myNadlepage));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [myNadlepage]);

  function onScrollMyNadle() {
    // window.scrollY : 얼마나 내렸는지
    // document.documentElement.clientHeight : 화면에 보이는 길이
    // document.documentElement.scrollHeight : 총길이
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
      setMyNadlepage(myNadlepage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollMyNadle);
    return () => {
      window.removeEventListener('scroll', onScrollMyNadle);
    };
  }, [onScrollMyNadle]);

  useEffect(() => {
    return () => {
      dispatch(claerMyNadles());
    };
  }, []);

  return (
    <ContentArea>
      {MyNadles?.length
        ? MyNadles?.map((v) => (
            // eslint-disable-next-line react/no-array-index-key
            <CurationCard
              key={Math.random().toString(36).substr(2, 5)}
              thumnail={v.thumnail}
              title={v.title}
              good={v.good}
              curationSeq={v.curationSeq}
            />
          ))
        : '내 나들코스가 없습니다.'}
    </ContentArea>
  );
}

export default MyNadlesComponent;

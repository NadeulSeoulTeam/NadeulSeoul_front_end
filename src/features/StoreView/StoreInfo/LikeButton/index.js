/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BtnExplain, LikeButtonStyle } from '../styles';
import { clickLikeCancel, clickLike, clickLikeCheck } from '../../StoreSlice';

function LikeButton({ storeData }) {
  const dispatch = useDispatch();
  const likeClicked = useSelector((state) => state.store.likeClicked);
  useEffect(() => {
    dispatch(clickLikeCheck({ storeSeq: storeData.id }));
  }, [storeData]);
  useEffect(() => {}, [likeClicked]);
  const userClickLike = () => {
    // 비동기 통신
    if (likeClicked) {
      // true->false
      dispatch(clickLikeCancel({ storeSeq: storeData.id }));
    } else {
      const data = {
        storeSeq: Number(storeData.id),
        addressName: storeData.address_name,
        categoryName: storeData.category_name,
        phone: storeData.phone,
        storeName: storeData.place_name,
        placeUrl: storeData.place_url,
        x: storeData.x,
        y: storeData.y,
      };
      dispatch(clickLike(data));
    }
  };
  return (
    <div>
      <BtnExplain>눌러서 찜하기</BtnExplain>
      {likeClicked && (
        <LikeButtonStyle active onClick={userClickLike}>
          💚
        </LikeButtonStyle>
      )}
      {!likeClicked && (
        <LikeButtonStyle active={false} onClick={userClickLike}>
          💚
        </LikeButtonStyle>
      )}
    </div>
  );
}
export default LikeButton;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BtnExplain, LikeButtonStyle } from '../styles';
import { clickLikeCancel, clickLike, clickLikeCheck } from '../../StoreSlice';

function LikeButton({ storeData }) {
  const dispatch = useDispatch();
  const [likeClick, setLikeClick] = useState(false);
  const { likeClicked } = useSelector((state) => state.store);
  useEffect(() => {
    console.log(storeData);
    dispatch(clickLikeCheck({ storeSeq: storeData.id }));
    console.log(likeClicked);
  }, [likeClick]);
  useEffect(() => {
    dispatch(clickLikeCheck({ storeSeq: storeData.id }));
  }, [storeData]);
  const userClickLike = () => {
    // 비동기 통신
    if (likeClicked) {
      // true->false
      // dispatch(clickLikeCancel(Number(storeData.id)));
      dispatch(clickLikeCancel({ storeSeq: storeData.id }));
    } else {
      // false->true
      // const formData = new FormData();
      // formData.append('storeSeq', 18203409);
      // formData.append('addressName', '서울 영등포구 여의도동 23-1');
      // formData.append('categoryName', '가정,생활 > 복합쇼핑몰');
      // formData.append('phone', '02-6137-5000');
      // formData.append('placeName', 'IFC몰');
      // formData.append('placeUrl', 'http://place.map.kakao.com/18203409');
      // formData.append('lat', '126.925955827282');
      // formData.append('lng', '37.5250668422081');
      const data = {
        storeSeq: Number(storeData.id),
        addressName: storeData.address_name,
        categoryName: storeData.category_name,
        phone: storeData.phone,
        placeName: storeData.place_name,
        placeUrl: storeData.place_url,
        lat: storeData.x,
        lng: storeData.y,
      };
      dispatch(clickLike(data));
    }
    setLikeClick(!likeClick);
  };
  return (
    <div>
      <BtnExplain>눌러서 찜하기</BtnExplain>
      <LikeButtonStyle active={!!likeClicked} onClick={userClickLike}>
        💚
      </LikeButtonStyle>
    </div>
  );
}
export default LikeButton;

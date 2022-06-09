/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { StoreCard, CloseBtn, CardHeader, CardScript } from './styles';
import { getStore, clickLikeCancel, clickLike } from '../StoreSlice';
import LikeButton from './LikeButton';

function StoreInfo() {
  const storeData = useSelector(getStore);
  const dispatch = useDispatch();
  const { kakao } = window;

  useEffect(() => {
    if (storeData.hasOwnProperty('place_name')) {
      const roadviewContainer = document.getElementById('roadview'); // 로드뷰를 표시할 div
      const roadview = new kakao.maps.Roadview(roadviewContainer); // 로드뷰 객체
      const roadviewClient = new kakao.maps.RoadviewClient(); // 좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

      const position = new kakao.maps.LatLng(storeData.y, storeData.x);

      // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
      roadviewClient.getNearestPanoId(position, 50, function (panoId) {
        roadview.setPanoId(panoId, position); // panoId와 중심좌표를 통해 로드뷰 실행
      });
    }
  }, [storeData]);

  return (
    storeData.hasOwnProperty('place_name') && (
      <StoreCard>
        <div id="roadview" style={{ width: '100%', height: '300px' }} />
        <CardHeader>{storeData.place_name}</CardHeader>
        <CardScript>{storeData.category_name}</CardScript>
        <CardScript>{storeData.address_name}</CardScript>
        {storeData.phone && storeData.phone > 0 && (
          <CardScript>전화번호 : {storeData.phone}</CardScript>
        )}
        <LikeButton storeData={storeData} />
      </StoreCard>
    )
  );
}

export default StoreInfo;

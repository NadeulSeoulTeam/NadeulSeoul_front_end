import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectLang,
  selectLat,
  selectLevel,
  getSearchData,
} from './CourseSlice';

import './Course.css';

import { addMarker } from './CourseMarker';

function CourseMap() {
  const { kakao } = window;
  const lat = useSelector(selectLat);
  const lng = useSelector(selectLang);
  const level = useSelector(selectLevel);
  const searchData = useSelector(getSearchData);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState();
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);
  // 마커 추가 effect
  useEffect(() => {
    // 고쳐야할부분
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < searchData.data.length; i++) {
      const placePosition = new kakao.maps.LatLng(
        searchData.data[i].y,
        searchData.data[i].x
      );
      addMarker(kakao, map, placePosition, i);
    }
  }, [searchData]);
  return (
    <div
      className="map"
      id="map"
      style={{
        width: '100%',
        height: '700px',
      }}
    />
  );
}

export default CourseMap;

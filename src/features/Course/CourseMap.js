import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectLang,
  selectLat,
  selectLevel,
  getSearchData,
} from './CourseSlice';

import './Course.css';

import { addMarker, setMarker, removeMarker } from './CourseMarker';

function CourseMap() {
  const [tempMarkers, setTempMarkers] = useState([]);
  const { kakao } = window;
  const lat = useSelector(selectLat);
  const lng = useSelector(selectLang);
  const level = useSelector(selectLevel);
  const searchData = useSelector(getSearchData);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState();
  useEffect(() => {
    // 카카오 맵 랜더링
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
    // 마커 초기화
    removeMarker(tempMarkers);
    setTempMarkers(tempMarkers.splice(0, tempMarkers.length));
    // 마커 추가
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < searchData.data.length; i++) {
      const placePosition = new kakao.maps.LatLng(
        searchData.data[i].y,
        searchData.data[i].x
      );
      console.log(searchData, 'searchData');
      tempMarkers.push(addMarker(kakao, map, placePosition, i)); // 배열에 생성된 마커를 추가합니다
    }
    setTempMarkers(tempMarkers);
    setMarker(map, tempMarkers);
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

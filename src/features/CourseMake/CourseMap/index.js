/* eslint-disable no-continue */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLang,
  selectLat,
  selectLevel,
  getSearchData,
  // moveToList,
  getClicked,
  setClicked,
  getClickedIndex,
} from '../CourseSlice';

import {
  addMarker,
  setMarker,
  removeMarker,
} from './CourseMarker/CourseMarker';

function CourseMap() {
  // 뒤로 가기에 대한 처리
  const [tempMarkers, setTempMarkers] = useState([]);
  const { kakao } = window;
  const lat = useSelector(selectLat);
  const lng = useSelector(selectLang);
  const level = useSelector(selectLevel);
  const searchData = useSelector(getSearchData);
  const clicked = useSelector(getClicked);
  const clickedIndex = useSelector(getClickedIndex);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    // 카카오 맵 랜더링
    console.log(lat);
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
    // const bounds = new kakao.maps.LatLngBounds(); // bounds 설정
    // 마커 초기화
    dispatch(setClicked(false));
    console.log(clicked, 'clicked?');
    removeMarker(tempMarkers);
    setTempMarkers(tempMarkers.splice(0, tempMarkers.length));
    // 마커 추가
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < searchData.data.length; i++) {
      const placePosition = new kakao.maps.LatLng(
        searchData.data[i].y,
        searchData.data[i].x
      );
      tempMarkers.push(addMarker(kakao, map, placePosition, i, null)); // 배열에 생성된 마커를 추가합니다
      if (i === 0 && map !== undefined) {
        map.panTo(placePosition);
        // dispatch(
        //   moveToList({ lat: searchData.data[i].y, lng: searchData.data[i].x })
        // );
      }
    }
    // map.setBounds(bounds);
    setTempMarkers(tempMarkers);
    setMarker(map, tempMarkers);
  }, [searchData]);
  useEffect(() => {
    // const bounds = new kakao.maps.LatLngBounds(); // bounds 설정
    // 마커 초기화
    console.log(clickedIndex, 'clicked!!');
    removeMarker(tempMarkers);
    setTempMarkers(tempMarkers.splice(0, tempMarkers.length));
    // 마커 추가
    // eslint-disable-next-line no-plusplus
    let tempPlacePosition;
    for (let i = 0; i < searchData.data.length; i += 1) {
      if (i === clickedIndex) {
        tempPlacePosition = new kakao.maps.LatLng(
          searchData.data[i].y,
          searchData.data[i].x
        );
        continue;
      }
      const placePosition = new kakao.maps.LatLng(
        searchData.data[i].y,
        searchData.data[i].x
      );
      tempMarkers.push(addMarker(kakao, map, placePosition, i, clickedIndex)); // 배열에 생성된 마커를 추가합니다
    }
    tempMarkers.push(
      addMarker(kakao, map, tempPlacePosition, clickedIndex, clickedIndex)
    );
    // map.setBounds(bounds);
    setTempMarkers(tempMarkers);
    setMarker(map, tempMarkers);
  }, [clickedIndex]);
  useEffect(
    () => {
      console.log('lat, lang changed');
      console.log(clicked);
      if (clicked && map !== undefined) {
        const placePosition = new kakao.maps.LatLng(lat, lng);
        map.panTo(placePosition);
      }
    },
    [lat],
    [lng]
  );

  return (
    <div
      className="map"
      id="map"
      style={{
        width: '100%',
        height: '100vh',
      }}
    />
  );
}

export default CourseMap;

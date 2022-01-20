import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLang, selectLat, selectLevel } from './CourseSlice';

import CourseCart from './CourseCart';

import './Course.css';

function CourseMap() {
  const { kakao } = window;
  const lat = useSelector(selectLat);
  const lng = useSelector(selectLang);
  const level = useSelector(selectLevel);
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
  return (
    <div>
      <div
        className="map"
        id="map"
        style={{
          width: '100%',
          height: '700px',
        }}
      />
      <CourseCart />
    </div>
  );
}

export default CourseMap;

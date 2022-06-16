/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material UI
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

import { useNavigate } from 'react-router';
import {
  selectLang,
  selectLat,
  selectLevel,
  // moveToList,
  // getClicked,
  setClicked,
  clickStoreLikeCheck,
  clickStoreLike,
  clickStoreLikeCancel,
} from '../CourseViewSlice';
// styled-component

import {
  addMarker,
  setMarker,
  setBounds,
  setPolyline,
} from './CourseViewMarker';

import CourseViewCart from '../CourseViewCart';
import { Map, CourseTitle, CourseHeader, CourseTags } from './styles';
import CourseViewMapStore from './CourseViewMapStore';

function CourseViewMap({ curationSeq, courseInfo }) {
  // 뒤로 가기에 대한 처리
  const [tempMarkers, setTempMarkers] = useState([]);
  const [tempLatLng, setTempLatLng] = useState([]);
  const { kakao } = window;
  // marker click 구분 변수
  const [clickedMarkerInfo, setClickMarkerInfo] = useState();
  const lat = useSelector(selectLat);
  const lng = useSelector(selectLang);
  const level = useSelector(selectLevel);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mapPushed, setMapPushed] = useState(false);
  const [beforeInfo, setBeforeInfo] = useState();

  // star clicked
  const likeStoreClicked = useSelector(
    (state) => state.courseView.likeStoreClicked
  );

  useEffect(() => {
    setTempLatLng([]);
  }, []);
  useEffect(() => {
    if (clickedMarkerInfo !== undefined && clickedMarkerInfo !== null)
      dispatch(
        clickStoreLikeCheck({
          storeSeq: clickedMarkerInfo.storeInfoDto.storeSeq,
        })
      );
  }, [clickedMarkerInfo]);

  // 마커 클릭 이벤트
  const markerClickEventHandler = () => {
    let clickedIndex = null;
    tempMarkers.forEach((marker, index) => {
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커 위에 인포윈도우를 표시합니다
        clickedIndex = courseInfo.curationCourse[index];
        setClickMarkerInfo(clickedIndex);
      });
    });
  };
  const userClickHeart = () => {
    // 비동기 통신
    if (likeStoreClicked) {
      // true->false
      dispatch(clickStoreLikeCancel(clickedMarkerInfo.storeInfoDto));
    } else {
      dispatch(
        clickStoreLike({
          storeSeq: Number(clickedMarkerInfo.storeInfoDto.storeSeq),
          addressName: clickedMarkerInfo.storeInfoDto.addressName,
          categoryName: clickedMarkerInfo.storeInfoDto.categoryName,
          phone: clickedMarkerInfo.storeInfoDto.phone,
          storeName: clickedMarkerInfo.storeInfoDto.storeName,
          placeUrl: clickedMarkerInfo.place_url,
          x: clickedMarkerInfo.storeInfoDto.x,
          y: clickedMarkerInfo.storeInfoDto.y,
        })
      ).then((res) => {
        if (!!res.error && res.error.message === 'Rejected') {
          if (!alert('로그인 후 이용해주세요!')) {
            navigate('/member/signin');
          }
        }
      });
    }
  };
  // 클릭시 랜더링 되는 정보
  const clickRender = (info) => {
    // 기본창 랜더링
    // store 정보 랜더링
    // eslint-disable-next-line consistent-return
    return (
      <CourseViewMapStore
        likeStoreClicked={likeStoreClicked}
        userClickHeart={userClickHeart}
        setClickMarkerInfo={setClickMarkerInfo}
        info={info}
      />
    );
  };

  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    return kakaoMap;
  };
  // 마커 추가 effect
  useEffect(() => {
    setTempLatLng([]);
    if (courseInfo === null) navigate('/');

    // 마커 초기화
    if (courseInfo === null || courseInfo.curationCourse === undefined) return;
    const bounds = new kakao.maps.LatLngBounds();
    const firstMap = initMap();
    dispatch(setClicked(false));
    // 마커 추가
    let newMarker = [];
    for (let i = 0; i < courseInfo.curationCourse.length; i += 1) {
      let arr = [];
      const placePosition = new kakao.maps.LatLng(
        courseInfo.curationCourse[i].storeInfoDto.y,
        courseInfo.curationCourse[i].storeInfoDto.x
      );

      tempLatLng[tempLatLng.length] = placePosition;
      setTempLatLng(arr);

      bounds.extend(placePosition);
      newMarker.push(addMarker(kakao, firstMap, placePosition, i)); // 배열에 생성된 마커를 추가합니다
      if (i === 0) {
        firstMap.panTo(placePosition);
      }
    }
    setMapPushed(true);
    setBeforeInfo(courseInfo.curationSeq);
    setTempMarkers(newMarker);
    setBounds(firstMap, bounds);
    setMarker(firstMap, newMarker);
    setPolyline(firstMap, tempLatLng, kakao);
  }, [courseInfo]);
  useEffect(() => {
    markerClickEventHandler();
  }, [tempMarkers]);
  useEffect(() => {}, [clickedMarkerInfo]);
  const tagHeader = () => {
    if (courseInfo.local === undefined || courseInfo.theme === undefined)
      return;
    let localHeader = '';
    courseInfo.local.map((local) => (localHeader += `#${local.codeName} `));
    courseInfo.theme.map((theme) => (localHeader += `#${theme.codeName} `));

    return (
      <CourseHeader>
        <CourseTitle>{courseInfo.title}</CourseTitle>
        <CourseTags>{localHeader}</CourseTags>
      </CourseHeader>
    );
  };
  return (
    <div>
      {courseInfo === null ? <div /> : <div>{tagHeader()}</div>}

      <Map
        clicked={clickedMarkerInfo}
        className="map"
        id="map"
        style={{
          width: '100%',
          height: '100vh',
        }}
      />
      {clickedMarkerInfo !== undefined &&
        clickedMarkerInfo !== null &&
        clickRender(clickedMarkerInfo.storeInfoDto)}
      {clickedMarkerInfo === undefined && (
        <div>
          <CourseViewCart curationSeq={curationSeq} courseInfo={courseInfo} />
        </div>
      )}
    </div>
  );
}

export default CourseViewMap;

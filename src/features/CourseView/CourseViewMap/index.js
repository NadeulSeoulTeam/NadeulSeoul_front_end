import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material UI
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

import {
  selectLang,
  selectLat,
  selectLevel,
  // moveToList,
  // getClicked,
  setClicked,
} from '../CourseViewSlice';
// styled-component

import {
  addMarker,
  setMarker,
  setBounds,
  setPolyline,
} from './CourseViewMarker';

import CourseViewCart from '../CourseViewCart';
// dummy data
import testdata from '../testdata';

import {
  Cart,
  DetailCard,
  Map,
  CardHeader,
  CardScript,
  CloseBtn,
  BtnExplain,
  StarBtn,
  CourseTitle,
} from './styles';

function CourseViewMap({ curationSeq }) {
  // 뒤로 가기에 대한 처리
  const [tempMarkers, setTempMarkers] = useState([]);
  const [tempLatLng, setTempLatLng] = useState([]);
  const { kakao } = window;
  // eslint-disable-next-line no-unused-vars
  const [courseData, setCourseData] = useState(testdata.data);
  // marker click 구분 변수
  const [clickedMarkerInfo, setClickMarkerInfo] = useState();
  const lat = useSelector(selectLat);
  const lng = useSelector(selectLang);
  const level = useSelector(selectLevel);
  // const clicked = useSelector(getClicked);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const courseInfo = useSelector((state) => state.courseInfo);
  // star clicked
  const [likeClicked, setLikeClicked] = useState(false);

  useEffect(() => {
    console.log(courseInfo);
  }, [courseInfo]);

  // 마커 클릭 이벤트
  const markerClickEventHandler = () => {
    let clickedIndex = null;
    tempMarkers.forEach((marker, index) => {
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커 위에 인포윈도우를 표시합니다
        clickedIndex = courseData.curation_stores[index];
        setClickMarkerInfo(clickedIndex);
      });
    });
  };

  // 클릭시 랜더링 되는 정보
  const clickRender = (info) => {
    // 기본창 랜더링
    if (info === undefined) {
      return (
        <div>
          <CourseViewCart curationSeq={curationSeq} />
        </div>
      );
    }

    const userClickHeart = () => {
      // 비동기 통신
      if (likeClicked) {
        // true->false
        // dispatch(clickStarCancel());
      } else {
        // false->true
        // const formData = new FormData();
        // formData.append('member_seq', user.member_seq);
        // formData.append('curation_seq', course.curation_seq);
        // dispatch(clickStar(formData));
      }
      console.log('clicked');
      setLikeClicked(!likeClicked);
    };

    // store 정보 랜더링
    // eslint-disable-next-line consistent-return
    return (
      <div>
        <Slide
          direction="left"
          in={info !== undefined}
          mountOnEnter
          unmountOnExit
        >
          <Cart>
            <DetailCard className="store_cart" sx={{ minWidth: 275 }}>
              {/* <CardActions>
              </CardActions> */}
              <CloseBtn onClick={() => setClickMarkerInfo(undefined)} />
              <BtnExplain>눌러서 찜하기</BtnExplain>
              <StarBtn
                active={!!likeClicked}
                type="submit"
                onClick={userClickHeart}
              >
                💚
              </StarBtn>
              <div style={{ padding: '1.5rem 1.5rem 3rem 1.5rem' }}>
                <CardHeader>{info.place_name}</CardHeader>
                <CardScript>{info.address_name}</CardScript>
                <CardScript>{info.category_name}</CardScript>
              </div>
            </DetailCard>
          </Cart>
        </Slide>
      </div>
    );
  };

  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    console.log(kakaoMap, '카카오맵');
    return kakaoMap;
  };
  // 마커 추가 effect
  useEffect(() => {
    // const bounds = new kakao.maps.LatLngBounds(); // bounds 설정
    // 마커 초기화
    const bounds = new kakao.maps.LatLngBounds();
    const firstMap = initMap();
    dispatch(setClicked(false));
    console.log(courseData.curation_stores, 'testdata?');
    // removeMarker(tempMarkers);
    setTempMarkers(tempMarkers.splice(0, tempMarkers.length));
    // 마커 추가
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < courseData.curation_stores.length; i++) {
      const placePosition = new kakao.maps.LatLng(
        courseData.curation_stores[i].y,
        courseData.curation_stores[i].x
      );
      // 위치 배열 추가
      tempLatLng.push(placePosition);
      setTempLatLng(tempLatLng);

      bounds.extend(placePosition);
      tempMarkers.push(addMarker(kakao, firstMap, placePosition, i)); // 배열에 생성된 마커를 추가합니다
      if (i === 0) {
        console.log(firstMap, 'first map');
        firstMap.panTo(placePosition);
        // dispatch(
        //   moveToList({ lat: searchData.data[i].y, lng: searchData.data[i].x })
        // );
      }
    }
    // map.setBounds(bounds);
    setTempMarkers(tempMarkers);
    setBounds(firstMap, bounds);
    setMarker(firstMap, tempMarkers);
    setPolyline(firstMap, tempLatLng, kakao);
    markerClickEventHandler();
  }, []);

  useEffect(() => {}, [clickedMarkerInfo]);

  return (
    <div>
      <CourseTitle>{courseData.title}</CourseTitle>
      <Map
        clicked={clickedMarkerInfo}
        className="map"
        id="map"
        style={{
          width: '100%',
          height: '730px',
        }}
      />
      {clickRender(clickedMarkerInfo)}
    </div>
  );
}

export default CourseViewMap;

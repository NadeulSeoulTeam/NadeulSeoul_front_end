import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material UI
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import { getCourse, keywordInput } from './CourseSlice';

import './Course.css';

function CourseSearch() {
  const dispatch = useDispatch();
  const course = useSelector(getCourse);
  const keyword = course.keywordInput;
  const [currentKeyword, setCurrentKeyword] = useState(keyword);
  const { kakao } = window;
  // 장소 검색 객체를 생성합니다
  // eslint-disable-next-line no-unused-vars
  const ps = new kakao.maps.services.Places();
  // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
  // const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // 키워드 검색을 요청하는 함수입니다
  // eslint-disable-next-line no-unused-vars

  const placesSearchCB = (data, status, pagination) => {
    console.log('시작');
    console.log(data);
    console.log(status);
    console.log(pagination);
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      // displayPlaces(data);
      // 페이지 번호를 표출합니다
      // displayPagination(pagination);
      console.log('성공');
      console.log(status);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  const searchPlaces = (kakaoKeyword) => {
    console.log('ok');
    console.log(kakaoKeyword);
    if (!kakaoKeyword.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }
    console.log('start search');
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(kakaoKeyword, placesSearchCB);
    return true;
  };

  useEffect(() => {
    // searchPlaces();
    console.log('useEffect');
    console.log(currentKeyword);
  }, [currentKeyword]);

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log('value', e.target.value);
      setCurrentKeyword(dispatch(keywordInput(e.target.value)).payload);
      searchPlaces(e.target.value);
    }
  };

  return (
    <Paper
      className="search"
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="원하는 곳을 입력하세요!"
        onKeyDown={keyPress}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}

export default CourseSearch;

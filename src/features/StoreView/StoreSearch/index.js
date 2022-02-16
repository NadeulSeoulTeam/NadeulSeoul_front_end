import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourse, keywordInput, searchDataInputs } from '../StoreSlice';
import { Wrapper, SearchBase, SearchInput, SearchBtn } from './styles';

function StoreSearch({ searchKeyword }) {
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
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      // displayPlaces(data);
      // 페이지 번호를 표출합니다
      // displayPagination(pagination);
      const tempInputData = { data, status, pagination };
      console.log('성공');
      console.log(tempInputData);
      dispatch(searchDataInputs(tempInputData));
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  const searchPlaces = (kakaoKeyword) => {
    if (kakaoKeyword !== null) {
      if (!kakaoKeyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
      }
      console.log('start search');
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch(kakaoKeyword, placesSearchCB);
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (searchKeyword !== undefined) {
      searchPlaces(searchKeyword);
    }
  }, []);
  useEffect(() => {
    // searchPlaces();
    console.log('useEffect');
    console.log(currentKeyword);
  }, [currentKeyword]);

  const keyPress = (e) => {
    console.log(e.target.value, 'value');

    setCurrentKeyword(dispatch(keywordInput(e.target.value)).payload);

    if (e.keyCode === 13) {
      e.preventDefault();
      console.log('value', e.target.value);
      searchPlaces(currentKeyword);
    }
  };

  return (
    <Wrapper container direction="row" justifyContent="center">
      <SearchBase elevation={1}>
        {searchKeyword === undefined ? (
          <SearchInput placeholder="어디로 떠날까요?" onKeyDown={keyPress} />
        ) : (
          <SearchInput value={searchKeyword} onKeyDown={keyPress} />
        )}
        <SearchBtn />
      </SearchBase>
    </Wrapper>
  );
}

export default StoreSearch;

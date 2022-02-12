/* eslint-disable no-plusplus */
// import React from "react";
// import { getCourse, keywordInput, searchDataInput } from './CourseSlice';

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
// const stateMarker = useSelector(getMarkers);

export function addMarker(kakao, map, position, idx) {
  const imageSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png'; // 마커 이미지 url, 스프라이트 이미지를 씁니다
  const imageSize = new kakao.maps.Size(36, 37); // 마커 이미지의 크기
  const imgOptions = {
    spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
    spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
  };
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imgOptions
  );
  const marker = new kakao.maps.Marker({
    position, // 마커의 위치
    image: markerImage,
  });

  // marker.setMap(map); // 지도 위에 마커를 표출합니다
  return marker;
}
export function setMarker(map, markers) {
  console.log('markers');
  console.log(markers);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
// 지도 위에 표시되고 있는 마커를 모두 제거합니다
export function removeMarker(markers) {
  console.log('Remove markers');
  console.log(markers);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  // eslint-disable-next-line no-param-reassign
  markers = [];
  return markers;
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
export function displayPagination(pagination) {
  const paginationEl = document.getElementById('pagination');
  const fragment = document.createDocumentFragment();
  let i;

  // 기존에 추가된 페이지번호를 삭제합니다
  while (paginationEl.hasChildNodes()) {
    paginationEl.removeChild(paginationEl.lastChild);
  }

  for (i = 1; i <= pagination.last; i++) {
    const el = document.createElement('a');
    el.href = '#';
    el.innerHTML = i;

    if (i === pagination.current) {
      el.className = 'on';
    } else {
      // eslint-disable-next-line no-shadow
      el.onclick = (function (i) {
        return function () {
          pagination.gotoPage(i);
        };
      })(i);
    }

    fragment.appendChild(el);
  }
  paginationEl.appendChild(fragment);
}

/* eslint-disable no-plusplus */
// import React from "react";
// import { getCourse, keywordInput, searchDataInput } from './CourseSlice';

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
// const stateMarker = useSelector(getMarkers);
export function addMarker(kakao, map, position, idx) {
  // const imageSrc =
  //   'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png'; // 마커 이미지 url, 스프라이트 이미지를 씁니다

  const imgSrcConcat = 'marker_img/marker_'; // 마커 이미지 url, 스프라이트 이미지를 씁니다
  const imageSrc = imgSrcConcat.concat(`${idx + 1}.png`);
  console.log(imageSrc);
  const imageSize = new kakao.maps.Size(36, 36); // 마커 이미지의 크기
  const imgOptions = {
    //   spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
    //   spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    offset: new kakao.maps.Point(18, 18), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
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
  console.log(markers, map);
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
export function setBounds(map, bounds) {
  map.setBounds(bounds);
  map.setLevel(map.getLevel() + 1);
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
export function setPolyline(map, placePosition, kakao) {
  const linePath = [];
  // polyline 그리기 위한 위치 path
  for (let i = 1; i < placePosition.length; i += 1) {
    linePath.push([placePosition[i - 1], placePosition[i]]);
  }
  const polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 8, // 선의 두께 입니다
    strokeColor: '#0de073', // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid', // 선의 스타일입니다
  });

  polyline.setMap(map);
}
// export function displayPlaces(places) {
//   var listEl = document.getElementById('placesList'),
//     menuEl = document.getElementById('menu_wrap'),
//     fragment = document.createDocumentFragment(),
//     bounds = new kakao.maps.LatLngBounds(),
//     listStr = '';

//   // 검색 결과 목록에 추가된 항목들을 제거합니다
//   removeAllChildNods(listEl);

//   // 지도에 표시되고 있는 마커를 제거합니다
//   removeMarker();

//   for (var i = 0; i < places.length; i++) {
//     // 마커를 생성하고 지도에 표시합니다
//     var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
//       marker = addMarker(placePosition, i),
//       itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

//     // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
//     // LatLngBounds 객체에 좌표를 추가합니다
//     bounds.extend(placePosition);

//     // 마커와 검색결과 항목에 mouseover 했을때
//     // 해당 장소에 인포윈도우에 장소명을 표시합니다
//     // mouseout 했을 때는 인포윈도우를 닫습니다
//     (function (marker, title) {
//       kakao.maps.event.addListener(marker, 'mouseover', function () {
//         displayInfowindow(marker, title);
//       });

//       kakao.maps.event.addListener(marker, 'mouseout', function () {
//         infowindow.close();
//       });

//       itemEl.onmouseover = function () {
//         displayInfowindow(marker, title);
//       };

//       itemEl.onmouseout = function () {
//         infowindow.close();
//       };
//     })(marker, places[i].place_name);

//     fragment.appendChild(itemEl);
//   }

//   // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
//   listEl.appendChild(fragment);
//   menuEl.scrollTop = 0;

//   // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//   map.setBounds(bounds);
// }

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// // 인포윈도우에 장소명을 표시합니다
// function displayInfowindow(marker, title) {
//   const content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

//   infowindow.setContent(content);
//   infowindow.open(map, marker);
// }

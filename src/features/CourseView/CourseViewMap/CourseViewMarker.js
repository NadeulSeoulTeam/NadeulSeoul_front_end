/* eslint-disable no-plusplus */
// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
// const stateMarker = useSelector(getMarkers);
export function addMarker(kakao, map, position, idx) {
  const imgSrcConcat = '/marker_img/marker_'; // 마커 이미지 url, 스프라이트 이미지를 씁니다
  const imageSrc = imgSrcConcat.concat(`${idx + 1}.png`);
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

  return marker;
}
export function setMarker(map, markers) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
// 지도 위에 표시되고 있는 마커를 모두 제거합니다
export function removeMarker(markers) {
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

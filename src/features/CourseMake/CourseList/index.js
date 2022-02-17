/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import HorizontalScroll from 'react-scroll-horizontal';
// css

// import ScrollMenu from 'react-horizontal-scrolling-menu';

import {
  addCourse,
  getCourse,
  getSearchData,
  moveToList,
  setClicked,
  setClickedIndex,
  getClickedIndex,
} from '../CourseSlice';
import CourseListItem from './CourseListItem';
import { ArrowBack, ArrowForward, List } from './styles';

function CourseList() {
  const [scrollClick, setScrollClick] = useState(false);
  const [storeClicked, setStoreClicked] = useState([]);

  let clickTimer;
  const tempData = useSelector(getSearchData);
  const clickedIndex = useSelector(getClickedIndex);
  const course = useSelector(getCourse);
  const dispatch = useDispatch();

  const searchData = tempData.data;

  // eslint-disable-next-line no-unused-vars
  const [dataItem, setDataItem] = useState(null);

  // scroll 구현
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (!scrollClick) {
      setScrollClick(true);
      scrollRef.current.scrollLeft += scrollOffset;
      setTimeout(() => {
        setScrollClick(false);
      }, 800);
    }
  };

  const addToCart = (search, index) => {
    console.log('index', index);
    console.log('search', search);
    dispatch(setClickedIndex(index));
    // 더블클릭->카트추가
    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;
      console.log(course);
      console.log(search);
      if (search.address_name.split(' ')[0] !== '서울') {
        alert('현재는 서울 지역 내로만 서비스 합니다 ㅠㅠ');
        return;
      }
      for (let i = 0; i < course.length; i += 1) {
        if (course[i].id === search.id) {
          alert('같은 장소를 두번 등록할 수 없습니다!');
          return;
        }
      }

      if (course.length >= 6) {
        alert('장소는 6개까지 등록할 수 있습니다!');
        return;
      }
      setStoreClicked(storeClicked.concat(search.id));
      dispatch(addCourse(search));
    } else {
      // 싱글 클릭->맵이동
      clickTimer = setTimeout(() => {
        console.log('singleClick', search);
        clickTimer = null;
        const latlng = { lat: search.y, lng: search.x };

        dispatch(setClicked(true));
        dispatch(moveToList(latlng));
      }, 350);
    }
  };
  const mapToComponent = (data) => {
    return data.map((search, index) => (
      <div>
        <CourseListItem
          addToCart={addToCart}
          search={search}
          index={index}
          active={clickedIndex === index}
        />
      </div>
    ));
  };
  useEffect(() => {
    setDataItem(mapToComponent(searchData));
    console.log(searchData, 'searchData');
  }, []);

  useEffect(() => {}, [searchData]);
  useEffect(() => {}, [course]);
  return (
    <div>
      {searchData.length !== 0 && <ArrowBack onClick={() => scroll(-500)} />}
      <List ref={scrollRef}>{mapToComponent(searchData)}</List>
      {searchData.length !== 0 && <ArrowForward onClick={() => scroll(500)} />}
    </div>
  );
}

export default CourseList;

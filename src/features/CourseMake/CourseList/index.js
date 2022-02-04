/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import HorizontalScroll from 'react-scroll-horizontal';
// css
import '../Course.css';

// import ScrollMenu from 'react-horizontal-scrolling-menu';

import {
  addCourse,
  getSearchData,
  moveToList,
  setClicked,
} from '../CourseSlice';
import CourseListItem from './CourseListItem';
import { ArrowBack, ArrowForward, List } from './styles';

function CourseList() {
  const [scrollClick, setScrollClick] = useState(false);

  let clickTimer;
  const tempData = useSelector(getSearchData);
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

  const addToCart = (search) => {
    // 더블클릭->카트추가
    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;
      dispatch(addCourse(search));
    } else {
      // 싱글 클릭->맵이동
      clickTimer = setTimeout(() => {
        console.log('singleClick', search.y, search.x);
        clickTimer = null;
        const latlng = { lat: search.y, lng: search.x };
        dispatch(setClicked(true));
        dispatch(moveToList(latlng));
      }, 250);
    }
  };
  const mapToComponent = (data) => {
    return data.map((search, index) => (
      <div id={index}>
        <CourseListItem addToCart={addToCart} search={search} />
      </div>
    ));
  };
  useEffect(() => {
    setDataItem(mapToComponent(searchData));
    console.log(searchData, 'searchData');
  }, []);

  useEffect(() => {}, [searchData]);

  return (
    <div>
      {searchData.length !== 0 && <ArrowBack onClick={() => scroll(-1175)} />}
      <List ref={scrollRef}>{mapToComponent(searchData)}</List>
      {searchData.length !== 0 && <ArrowForward onClick={() => scroll(1175)} />}
    </div>
  );
}

export default CourseList;

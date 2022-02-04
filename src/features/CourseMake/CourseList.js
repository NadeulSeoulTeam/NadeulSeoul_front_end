/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import HorizontalScroll from 'react-scroll-horizontal';
// css
import './Course.css';

// import ScrollMenu from 'react-horizontal-scrolling-menu';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
  addCourse,
  getSearchData,
  moveToList,
  setClicked,
} from './CourseSlice';
import CourseListItem from './CourseListItem';

function CourseList() {
  let clickTimer;
  const tempData = useSelector(getSearchData);
  const dispatch = useDispatch();

  const searchData = tempData.data;

  // eslint-disable-next-line no-unused-vars
  const [dataItem, setDataItem] = useState(null);

  // scroll 구현
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const delay = 30;
  const onThrottleDragMove = throttle(onDragMove, delay);

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
    console.log(dataItem, 'dataItem');
  }, []);

  useEffect(() => {}, [searchData]);

  return (
    <div>
      <div className="arrow_back">
        <ArrowBackIosIcon color="secondary" />
      </div>
      <div
        className="list"
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {mapToComponent(searchData)}
      </div>
      <div className="arrow_forward">
        <ArrowForwardIosIcon color="secondary" />
      </div>
    </div>
  );
}

export default CourseList;

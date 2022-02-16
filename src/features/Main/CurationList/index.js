/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import React, { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';

import CurationGrid from './styles';
// import Grid from '@mui/material/Grid';

import CurationListItem from '../CurationListItem';
import { fetchCourses } from '../MainSlice';

function CurationList() {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  // 받아온 코스 list
  const courseList = useSelector((state) => state.main.courses);
  const { courses } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  useEffect(() => {
    console.log(courses, '회칙회칙!');
  }, [courses]);
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

  const onThrottleDragMove = throttle(onDragMove, 100);

  const mapToComponent = (data) => {
    return data.map((curation) => (
      <CurationListItem key={curation.curation_seq} curation={curation} />
    ));
  };

  return (
    // <Grid container>{mapToComponent(courseList)}</Grid>
    <CurationGrid
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
    >
      {/* {mapToComponent(courseList)} */}
      {mapToComponent(courses)}
    </CurationGrid>
  );
}

export default CurationList;

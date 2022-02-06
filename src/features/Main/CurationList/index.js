import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import CurationGrid from './styles';
// import Grid from '@mui/material/Grid';

import CurationListItem from '../CurationListItem';

function CurationList() {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

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

  // 받아온 코스 list
  const courseList = useSelector((state) => state.main.courses);

  const mapToComponent = (data) => {
    console.log('CurationList');
    console.log(data);
    return data.map((curation) => <CurationListItem curation={curation} />);
  };

  return (
    // <Grid container>{mapToComponent(courseList)}</Grid>
    <CurationGrid
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
    >
      {mapToComponent(courseList)}
    </CurationGrid>
  );
}

export default CurationList;

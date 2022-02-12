import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import StoreGrid from './styles';

import StoreListItem from '../StoreListItem';

function StoreList() {
  // const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  // useEffect(() => {
  //   dispatch(fetchStores());
  // }, []);

  const storeList = useSelector((state) => state.main.stores);

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
    console.log('StoreList');
    console.log(data);
    return data.map((store) => <StoreListItem store={store} />);
  };

  return (
    // <Grid container>{mapToComponent(storeList)}</Grid>;
    <StoreGrid
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
    >
      {mapToComponent(storeList)}
    </StoreGrid>
  );
}

export default StoreList;

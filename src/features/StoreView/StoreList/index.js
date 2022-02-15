/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import HorizontalScroll from 'react-scroll-horizontal';

// import ScrollMenu from 'react-horizontal-scrolling-menu';

import {
  getSearchData,
  moveToList,
  setClicked,
  setStore,
  setClickedIndex,
  getClickedIndex,
} from '../StoreSlice';
import StoreListItem from './StoreListItem';
import { ArrowBack, ArrowForward, List } from './styles';

function StoreList() {
  const [scrollClick, setScrollClick] = useState(false);
  const [storeClicked, setStoreClicked] = useState([]);

  const clickedIndex = useSelector(getClickedIndex);
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

  const addToCart = (search, index) => {
    setStoreClicked(search);
    dispatch(setClickedIndex(index));
    const latlng = { lat: search.y, lng: search.x };
    dispatch(setClicked(true));
    dispatch(moveToList(latlng));
    dispatch(setStore(search));
    console.log(index, clickedIndex);
  };
  const mapToComponent = (data) => {
    return data.map((search, index) => (
      <div id={index}>
        <StoreListItem
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
  useEffect(() => {
    console.log(storeClicked);
  }, [storeClicked]);

  return (
    <div>
      {searchData.length !== 0 && <ArrowBack onClick={() => scroll(-500)} />}
      <List ref={scrollRef}>{mapToComponent(searchData)}</List>
      {searchData.length !== 0 && <ArrowForward onClick={() => scroll(500)} />}
    </div>
  );
}

export default StoreList;

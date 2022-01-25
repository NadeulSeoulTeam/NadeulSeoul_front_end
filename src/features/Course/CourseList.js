import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// css
import './Course.css';

import { addCourse, getSearchData, moveToList } from './CourseSlice';
import CourseListItem from './CourseListItem';

function CourseList() {
  let clickTimer;
  const tempData = useSelector(getSearchData);
  const dispatch = useDispatch();

  const searchData = tempData.data;

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
        dispatch(moveToList(latlng));
      }, 250);
    }
  };
  const mapToComponent = (data) => {
    console.log('start maptocomponent');
    console.log(data);
    return data.map((search) => (
      <CourseListItem addToCart={addToCart} search={search} />
    ));
  };

  useEffect(() => {
    console.log('searchData');
    console.log(searchData);
  }, [searchData]);

  return <div className="list">{mapToComponent(searchData)}</div>;
}

export default CourseList;

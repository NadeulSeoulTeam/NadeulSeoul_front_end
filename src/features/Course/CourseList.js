import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// css
import './Course.css';

import { addCourse, getSearchData } from './CourseSlice';
import CourseListItem from './CourseListItem';

function CourseList() {
  const tempData = useSelector(getSearchData);
  const dispatch = useDispatch();

  const searchData = tempData.data;

  const addToCart = (search) => {
    console.log('addtocart');
    console.log(search);
    dispatch(
      addCourse({ name: search.place_name, address: search.address_name })
    );
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

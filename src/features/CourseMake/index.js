/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CourseCart from './CourseCart';
import CourseMap from './CourseMap';
import CourseSearch from './CourseSearch';
import CourseList from './CourseList';
import { addCourse } from './CourseSlice';

function CourseMake() {
  const dispatch = useDispatch();
  const useNavigateState = useLocation().state;
  console.log(useNavigateState, '들어온 데이터');
  // navigate 데이터 null 처리 필요
  useEffect(() => {
    if (useNavigateState !== null) {
      for (let i = 0; i < useNavigateState.length; i += 1) {
        const data = {
          address_name: useNavigateState[i].addressName, // 꼭 필요!!!!!!!!!
          category_group_code: '',
          category_group_name: '',
          category_name: useNavigateState[i].categoryName,
          distance: '',
          id: useNavigateState[i].storeSeq.toString(),
          phone: useNavigateState[i].phone,
          place_name: useNavigateState[i].storeName,
          place_url: useNavigateState[i].address,
          road_address_name: '',
          x: useNavigateState[i].x,
          y: useNavigateState[i].y,
        };
        dispatch(addCourse(data));
      }
    }
  }, [useNavigateState]);
  return (
    <div>
      <CourseMap />
      <CourseCart />
      <CourseSearch />
      <CourseList />
    </div>
  );
}

export default CourseMake;

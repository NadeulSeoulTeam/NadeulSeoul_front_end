/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CourseViewMap from './CourseViewMap';
import CourseStoreLoad from './CourseStoreLoad';
import { getCourseInfo } from './CourseViewSlice';

function CourseView() {
  const dispatch = useDispatch();
  const [courseInfo, setCourseInfo] = useState(0);

  useEffect(() => {
    const test = dispatch(
      getCourseInfo({
        curationSeq: 1,
      })
    );
    console.log(test);
  }, []);

  return (
    <div>
      <CourseViewMap />
      <CourseStoreLoad />
    </div>
  );
}

export default CourseView;

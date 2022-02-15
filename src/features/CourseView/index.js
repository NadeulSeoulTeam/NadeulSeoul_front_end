/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import CourseViewMap from './CourseViewMap';
import CourseStoreLoad from './CourseStoreLoad';
import { getCourseInfo } from './CourseViewSlice';

function CourseView() {
  const dispatch = useDispatch();
  const [courseInfo, setCourseInfo] = useState(0);
  const params = useParams();
  useEffect(() => {
    console.log(params.curationNo);
    dispatch(
      getCourseInfo({
        curationSeq: params.curationNo,
      })
    );
  }, []);

  return (
    <div>
      <CourseViewMap curationSeq={params.curationNo} />
      <CourseStoreLoad />
    </div>
  );
}

export default CourseView;

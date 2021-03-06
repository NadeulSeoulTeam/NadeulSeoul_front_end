/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import CourseViewMap from './CourseViewMap';
import CourseStoreLoad from './CourseStoreLoad';
import { getCourseInfo, setMarkers } from './CourseViewSlice';

function CourseView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseInfo, courseInfoError } = useSelector(
    (state) => state.courseView
  );
  const params = useParams();
  useEffect(() => {
    setMarkers([]);
    dispatch(
      getCourseInfo({
        curationSeq: params.curationNo,
      })
    );
  }, []);
  useEffect(() => {
    if (courseInfo === null) navigate('/');
  }, [courseInfo]);
  useEffect(() => {
    if (courseInfoError === 'Rejected') {
      navigate('/');
    }
  }, [courseInfoError]);
  return (
    <div>
      {courseInfo !== null && (
        <>
          <CourseViewMap
            curationSeq={params.curationNo}
            courseInfo={courseInfo}
          />

          <CourseStoreLoad courseInfo={courseInfo} />
        </>
      )}
    </div>
  );
}

export default CourseView;

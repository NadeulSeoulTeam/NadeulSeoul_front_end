import React from 'react';
import { useLocation } from 'react-router-dom';
import CourseCart from './CourseCart';
import CourseMap from './CourseMap';
import CourseSearch from './CourseSearch';
import CourseList from './CourseList';

function CourseMake() {
  const useNavigateState = useLocation().state;
  console.log(useNavigateState);
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

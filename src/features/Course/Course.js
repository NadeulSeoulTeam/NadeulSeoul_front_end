import React from 'react';
import CourseCart from './CourseCart';
import CourseMap from './CourseMap';
import CourseSearch from './CourseSearch';

function Course() {
  return (
    <div>
      <CourseMap />
      <CourseCart />
      <CourseSearch />
    </div>
  );
}

export default Course;

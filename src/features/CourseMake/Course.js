import React from 'react';
import CourseCart from './CourseCart';
import CourseMap from './CourseMap';
import CourseSearch from './CourseSearch';
import CourseList from './CourseList/CourseList';

function Course() {
  return (
    <div>
      <CourseMap />
      <CourseCart />
      <CourseSearch />
      <CourseList />
    </div>
  );
}

export default Course;

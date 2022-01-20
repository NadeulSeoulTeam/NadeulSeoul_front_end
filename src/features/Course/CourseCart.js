import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCourse } from './CourseSlice';

function CourseCart() {
  const cart = useSelector(getCourse);
  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <div className="CourseCart">
      <div className="Course Header">내 코스에 추가할 장소</div>
      <div className="Course Name">{cart.name}</div>
      <div className="Course place">{cart.address}</div>
    </div>
  );
}

export default CourseCart;

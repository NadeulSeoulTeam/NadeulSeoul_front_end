import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { getCourse } from './CourseSlice';

// css
import './Course.css';

import CourseCreationModal from './CourseCreationModal';

function CourseCreactionForm() {
  const carts = useSelector(getCourse);
  const navigate = useNavigate();

  // info
  const [courseInfo, setCourseInfo] = useState({
    courseName: '',
    courseExplain: '',
    fixedNumber: '',
    budget: '',
  });

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(courseInfo);
  }, [courseInfo]);

  const sendCourse = () => {
    console.log('sendCourse');
    handleOpen();
    console.log(open);
  };
  // course 정보 backend 송신 함수
  const sendFinalCourseInfo = () => {
    console.log('sendFinalCourseInfo');
    // navigaion
    navigate(`/`);
  };

  // input 값 저장하기
  // eslint-disable-next-line consistent-return
  const onChange = (e) => {
    console.log('on change');
    console.log(courseInfo);

    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case 'courseName':
        courseInfo.courseName = e.target.value;
        setCourseInfo(courseInfo);
        break;

      case 'courseExplain':
        courseInfo.courseExplain = e.target.value;
        setCourseInfo(courseInfo);
        break;

      case 'fixedNumber':
        courseInfo.fixedNumber = e.target.value;
        setCourseInfo(courseInfo);
        break;

      case 'budget':
        courseInfo.budget = e.target.value;
        setCourseInfo(courseInfo);
        break;

      default:
        return console.log('no match');
    }
  };
  const mapToComponent = () => {
    console.log('start maptocomponent');
    console.log(carts);
    return carts.map((search) => (
      <Card className="creation_cart" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Typography className="placeName" variant="body4">
              {search.place_name}
            </Typography>
            <Typography className="addressName" variant="body2">
              {search.address_name}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div>
      <h3>나만의 코스 만들기</h3>
      <div className="course_name">
        <p>*코스 이름</p>
        <input
          onChange={onChange}
          type="text"
          id="courseName"
          name="courseName"
        />
      </div>
      <div className="course_route">
        <p>루트 편집</p>
        {mapToComponent()}
      </div>
      <div className="course_explain">
        <p>코스 설명</p>
        <input
          onChange={onChange}
          type="text"
          id="courseExplain"
          name="courseExplain"
        />
      </div>
      <div className="fixed_number">
        <p>함께한 인원</p>
        <input
          onChange={onChange}
          type="text"
          id="fixedNumber"
          name="fixedNumber"
        />
      </div>
      <div className="budget">
        <p>예산</p>
        <input onChange={onChange} type="text" id="budget" name="budget" />
      </div>
      <div className="transportation_type">
        <p>교통수단</p>
        <input type="button" id="byWalk" name="byWalk" value="도보" />
        <input type="button" id="byBus" name="byBus" value="버스" />
        <input type="button" id="byMetro" name="byMetro" value="지하철" />
        <input type="button" id="byCar" name="byCar" value="자동차" />
        <input type="button" id="byTaxi" name="byTaxi" value="택시" />
        <input type="button" id="byBicycle" name="byBicycle" value="자전거" />
      </div>
      <div className="region_tag">
        <p>지역 태그</p>
        <input type="button" id="regionTag" name="regionTag" />
      </div>
      <div className="theme_tag">
        <p>테마 태그</p>
        <input type="button" id="themeTag" name="themeTag" />
      </div>
      <button type="submit" onClick={sendCourse}>
        이대로 코스 생성하기
      </button>
      <CourseCreationModal
        sendFinalCourseInfo={sendFinalCourseInfo}
        handleClose={handleClose}
        open={open}
      />
    </div>
  );
}

export default CourseCreactionForm;

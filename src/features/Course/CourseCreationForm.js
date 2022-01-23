import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

// material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { getCourse } from './CourseSlice';

// css
import './Course.css';

function CourseCreactionForm() {
  const carts = useSelector(getCourse);

  useEffect(() => {
    console.log(carts);
  }, []);

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
        <input type="text" id="courseName" name="courseName" />
      </div>
      <div className="course_route">
        <p>루트 편집</p>
        {mapToComponent()}
      </div>
      <div className="course_explain">
        <p>코스 설명</p>
        <input type="text" id="courseExplain" name="courseExplain" />
      </div>
      <div className="fixed_number">
        <p>함께한 인원</p>
        <input type="text" id="fixedNumber" name="fixedNumber" />
      </div>
      <div className="budget">
        <p>예산</p>
        <input type="text" id="budget" name="budget" />
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
      <button type="submit">이대로 코스 생성하기</button>
    </div>
  );
}

export default CourseCreactionForm;

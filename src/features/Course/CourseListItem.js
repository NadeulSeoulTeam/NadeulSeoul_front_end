import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// css
import './Course.css';

import { getSearchData } from './CourseSlice';

function CourseListItem() {
  const tempData = useSelector(getSearchData);
  const searchData = tempData.data;

  // course 나열 함수
  // eslint 는 key값으로 array의 인덱스를 사용하지 말라한다.... ????
  const mapToComponent = (data) => {
    return data.map((search) => (
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <Typography variant="body4">{search.place_name}</Typography>
              <Typography variant="body2">{search.address_name}</Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">test</Button>
          </CardActions>
        </Card>
      </div>
    ));
  };

  useEffect(() => {
    console.log('searchData');
    console.log(searchData);
  }, [searchData]);

  return mapToComponent(searchData);
}

export default CourseListItem;

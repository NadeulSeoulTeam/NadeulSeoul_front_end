import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

import CurationListItem from './CurationListItem';
import { getCourses } from './MainSlice';

function CurationList() {
  // const sampleList = [];
  // for (let i = 0; i < 6; i += 1) {
  //   sampleList[i] = { title: '큐레이션 제목', likes: 39 };
  // }

  const courseList = useSelector(getCourses);

  const mapToComponent = (data) => {
    console.log(data);
    return data.map((curation) => <CurationListItem curation={curation} />);
  };

  return <Grid container>{mapToComponent(courseList)}</Grid>;
}

export default CurationList;

import React from 'react';
import { useSelector } from 'react-redux';

// import CurationGrid from './CurationListStyle';
import Grid from '@mui/material/Grid';

import CurationListItem from './CurationListItem';

function CurationList() {
  const courseList = useSelector((state) => state.mainReducer.courses);

  const mapToComponent = (data) => {
    console.log('CurationList');
    console.log(data);
    return data.map((curation) => <CurationListItem curation={curation} />);
  };

  return (
    <Grid container>{mapToComponent(courseList)}</Grid>
    // <CurationGrid>{mapToComponent(courseList)}</CurationGrid>
  );
}

export default CurationList;

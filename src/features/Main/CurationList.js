import React from 'react';

import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import CurationListItem from './CurationListItem';

function CurationList() {
  const sampleList = [];
  for (let i = 0; i < 6; i += 1) {
    sampleList[i] = { title: '큐레이션 제목', likes: 39 };
  }

  const mapToComponent = (data) => {
    console.log(data);
    return data.map((curation) => <CurationListItem curation={curation} />);
  };

  return <Grid container>{mapToComponent(sampleList)}</Grid>;
}

export default CurationList;

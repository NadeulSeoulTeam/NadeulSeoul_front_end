import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// function RegionTagList() {
//   const regions = ['지역1', '지역2', '지역3'];
//   const regionTags = regions.map((region) => (
//     <Box component="div" sx={{ display: 'inline', pr: 1 }}>
//       {region}
//     </Box>
//   ));
//   return <Box>{regionTags}</Box>;
// }

function TagList() {
  // const [selectedRegion, setSelectedRegion] = useState([]);
  // const [selectedTheme, setSelectedTheme] = useState([]);
  // const handleSelect = (e) => {
  //   setSelectedRegion.push(e.target.value);
  // };

  const RegionTagList = () => {
    const regions = ['지역1', '지역2', '지역3'];
    return regions.map((region) => (
      <Box component="div" sx={{ display: 'inline', pr: 1 }}>
        {region}
      </Box>
    ));
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        sx={{
          backgroundColor: '#ffffff',
          width: '70vw',
          textAlign: 'left',
        }}
      >
        <div>
          <p>지역 태그</p>
          {RegionTagList}
          <p>테마 태그</p>
        </div>
      </Paper>
    </Container>
  );
}

export default TagList;

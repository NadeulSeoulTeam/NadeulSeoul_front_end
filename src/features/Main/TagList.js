import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

function RegionTagList() {
  const regions = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];
  const regionTags = regions.map((region) => (
    <span sx={{ p: 2 }}>{region}</span>
  ));
  return <div>{regionTags}</div>;
}

function TagList() {
  // const [selectedRegion, setSelectedRegion] = useState([]);
  // const [selectedTheme, setSelectedTheme] = useState([]);
  // const handleSelect = (e) => {
  //   setSelectedRegion.push(e.target.value);
  // };

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
          <RegionTagList />
          <p>테마 태그</p>
        </div>
      </Paper>
    </Container>
  );
}

export default TagList;

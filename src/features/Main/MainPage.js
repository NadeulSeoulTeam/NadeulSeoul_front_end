import React, { useState } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SearchBar from '../../common/SearchBar/SearchBar';
import TagList from './TagList';
import CurationList from './CurationList';
import {
  TopWrapper,
  BottomWrapper,
  MainTitle,
  GreenBtn,
  SubTitle,
} from './MainPageStyle';

function MainPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <StylesProvider injectFirst>
      <TopWrapper>
        <MainTitle>나들서울</MainTitle>
        <GreenBtn>현재 위치 기준으로 보기</GreenBtn>
        <SearchBar />
        <Stack
          direction="row"
          spacing={1}
          container
          justifyContent="center"
          sx={{ display: 'inline' }}
        >
          <Chip label="강남구" variant="outlined" />
          <Chip label="서대문구" variant="outlined" />
          <Chip label="데이트코스" variant="outlined" />
          <Chip label="공원 산책" variant="outlined" />
        </Stack>
        <button
          sx={{ display: 'inline' }}
          type="button"
          onClick={handleOpen}
          onKeyDown={handleOpen}
        >
          태그 더보기▼
        </button>
        {open ? <TagList /> : null}
      </TopWrapper>
      <BottomWrapper>
        <SubTitle>지금 HOT한 코스</SubTitle>
        <CurationList />
        <SubTitle>열정적인 나들러</SubTitle>
        <SubTitle>나들러들이 많이 찜한 장소</SubTitle>
      </BottomWrapper>
    </StylesProvider>
  );
}

export default MainPage;

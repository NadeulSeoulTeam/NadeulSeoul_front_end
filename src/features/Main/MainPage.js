import React, { useState } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SearchBar from '../../common/SearchBar/SearchBar';
import { Wrapper, MainTitle, GreenBtn } from './MainPageStyle';
import TagList from './TagList';

function MainPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <StylesProvider injectFirst>
      <Wrapper>
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
      </Wrapper>
    </StylesProvider>
  );
}

export default MainPage;

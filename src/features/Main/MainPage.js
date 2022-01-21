import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { Wrapper, MainTitle, GreenBtn } from './MainPageStyle';
// import SearchBar from '../common/SearchBar/SearchBar';

function MainPage() {
  return (
    <StylesProvider injectFirst>
      <Wrapper>
        <MainTitle>나들서울</MainTitle>
        {/* <SearchBar /> */}
        <GreenBtn>현재 위치 기준으로 보기</GreenBtn>
      </Wrapper>
    </StylesProvider>
  );
}

export default MainPage;

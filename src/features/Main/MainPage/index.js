/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
// import { StylesProvider } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';

// components
import StoreList from '../StoreList';
import TagList from '../TagList';
import UserList from '../UserList';
import CurationList from '../CurationList';
import SearchBar from '../../../common/SearchBar';

// custom style
import {
  TopWrapper,
  MidWrapper,
  BottomWrapper,
  MainTitle,
  GreenBtn,
  SubTitle,
  SampleTags,
  TagOpener,
} from './styles';

// actions
import { LoadUserInfo, fetchLocalTags, fetchThemeTags } from '../MainSlice';

// cookie
import { getLoginSuccess } from '../../../common/api/JWT-Token';

function MainPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { themeTag, localTag } = useSelector((state) => state.main);
  const handleOpen = () => {
    setOpen(!open);
  };

  if (getLoginSuccess) {
    useEffect(() => {
      dispatch(LoadUserInfo())
        .unwrap()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  useEffect(() => {
    // dispatch(fetchLocalTags());
    // dispatch(fetchThemeTags());
    console.log(themeTag, localTag);
  }, []);

  return (
    <div>
      <TopWrapper>
        <MainTitle>나들서울</MainTitle>
        <GreenBtn>현재 위치 기준으로 보기</GreenBtn>
        <SearchBar />
        <MidWrapper>
          <SampleTags>강남구</SampleTags>
          <SampleTags>서대문구</SampleTags>
          <SampleTags>데이트코스</SampleTags>
          <SampleTags>공원 산책</SampleTags>
          <TagOpener onClick={handleOpen}>태그 더보기▼</TagOpener>
        </MidWrapper>
        {open ? <TagList /> : null}
      </TopWrapper>
      <BottomWrapper>
        <SubTitle>지금 HOT한 코스</SubTitle>
        <CurationList />
        <SubTitle>열정적인 나들러</SubTitle>
        <UserList />
        <SubTitle>나들러들이 많이 찜한 장소</SubTitle>
        <StoreList />
      </BottomWrapper>
    </div>
  );
}

export default MainPage;

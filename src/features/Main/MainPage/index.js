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
import {
  LoadUserInfo,
  fetchLocalTags,
  fetchThemeTags,
  LocalNThemeTagsSelected,
} from '../MainSlice';

function MainPage() {
  const [localClicked, setLocalClicked] = useState();
  const [themeClicked, setThemeClicked] = useState();
  const [clicked, setClicked] = useState(0);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [tagsSelectedContent, setTagsSelectedContent] = useState();
  // const { themeTag, localTag } = useSelector((state) => state.main);
  const { localTag, themeTag, localNThemeTagsSelected } = useSelector(
    (state) => state.main
  );
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setLocalClicked(Array(localTag.length).fill(false));
    setThemeClicked(Array(themeTag.length).fill(false));
  }, []);
  useEffect(() => {
    console.log(localClicked, themeClicked);
  }, [localClicked, themeClicked]);
  useEffect(() => {
    console.log(localClicked);
    console.log(themeClicked);
    console.log(clicked);
    if (clicked > 0) {
      const local = [];
      const theme = [];
      for (let i = 0; i < localClicked.length; i += 1) {
        if (localClicked[i]) local.push(i + 1);
      }
      for (let i = 0; i < themeClicked.length; i += 1) {
        if (themeClicked[i]) theme.push(i + 26);
      }
      const data = { local, theme };
      dispatch(LocalNThemeTagsSelected(data));
    }
  }, [clicked]);
  // 태그 조건부 랜더링
  const tagSelectRender = (content) => {
    if (content === undefined) return <div />;
    return content.map((curation) => <div>{curation.curationSeq}</div>);
  };
  useEffect(() => {
    if (
      localNThemeTagsSelected.content !== undefined &&
      localNThemeTagsSelected.content.length > 0
    ) {
      setTagsSelectedContent(localNThemeTagsSelected.content);
    }
  }, [localNThemeTagsSelected]);
  const setLocalBoolean = (codeSeq) => {
    console.log(codeSeq);
    localClicked[codeSeq - 1] = !localClicked[codeSeq - 1];
    setLocalClicked(localClicked);
    if (localClicked[codeSeq - 1]) setClicked(clicked + 1);
    else setClicked(clicked - 1);
  };
  const setThemeBoolean = (codeSeq) => {
    console.log(codeSeq);
    themeClicked[codeSeq - 26] = !themeClicked[codeSeq - 26];
    setThemeClicked(themeClicked);
    if (themeClicked[codeSeq - 26]) setClicked(clicked + 1);
    else setClicked(clicked - 1);
  };
  useEffect(() => {
    // dispatch(LoadUserInfo())
    //   .unwrap()
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });

  useEffect(() => {
    dispatch(fetchLocalTags());
    dispatch(fetchThemeTags());
    // console.log(themeTag, localTag);
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
        {open ? (
          <TagList
            themeClicked={themeClicked}
            localClicked={localClicked}
            setLocalBoolean={setLocalBoolean}
            setThemeBoolean={setThemeBoolean}
          />
        ) : null}
      </TopWrapper>
      {clicked === 0 ? (
        <BottomWrapper>
          <SubTitle>지금 HOT한 코스</SubTitle>
          <CurationList />
          <SubTitle>열정적인 나들러</SubTitle>
          <UserList />
          <SubTitle>나들러들이 많이 찜한 장소</SubTitle>
          <StoreList />
        </BottomWrapper>
      ) : (
        <div>{tagSelectRender(tagsSelectedContent)}</div>
      )}
    </div>
  );
}

export default MainPage;

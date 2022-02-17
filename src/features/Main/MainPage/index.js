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
import sampleImg from '../nongdam.png';
// custom style
import {
  TopWrapper,
  BottomWrapper,
  MainTitle,
  SubTitle,
  TagOpener,
  Wrapper,
  ImageDiv,
  CurationImage,
  LikeChip,
  CurationTitle,
  CurationGrid,
  NoResult,
} from './styles';

// actions
import {
  LoadUserInfo,
  fetchLocalTags,
  fetchThemeTags,
  LocalNThemeTagsSelected,
} from '../MainSlice';

// cookie
import { getLoginSuccess } from '../../../common/api/JWT-Token';

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

  console.log(getLoginSuccess(), typeof getLoginSuccess());

  if (getLoginSuccess() === 'false') {
    useEffect(() => {
      dispatch(LoadUserInfo())
        .unwrap()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  useEffect(() => {
    setLocalClicked(Array(localTag?.length).fill(false));
    setThemeClicked(Array(themeTag?.length).fill(false));
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
    console.log('여기');
    console.log(content);
    if (content === undefined)
      return <NoResult>🙄 선택하신 태그를 가진 코스가 없어요.</NoResult>;
    return content.map((curation) => (
      <Wrapper elevation={0}>
        <ImageDiv>
          <CurationImage alt="profile_img" src={sampleImg} />
          <LikeChip>👍{curation.good}</LikeChip>
        </ImageDiv>
        <CurationTitle>{curation.title}</CurationTitle>
      </Wrapper>
    ));
  };

  useEffect(() => {
    if (localNThemeTagsSelected.content !== undefined) {
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
    dispatch(fetchLocalTags());
    dispatch(fetchThemeTags());
    // console.log(themeTag, localTag);
  }, []);

  return (
    <div>
      <TopWrapper>
        <MainTitle>나들서울</MainTitle>
        <SearchBar />
        <TagOpener onClick={handleOpen}>눌러서 코스 검색하기▼</TagOpener>
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
        <CurationGrid>{tagSelectRender(tagsSelectedContent)}</CurationGrid>
      )}
    </div>
  );
}

export default MainPage;

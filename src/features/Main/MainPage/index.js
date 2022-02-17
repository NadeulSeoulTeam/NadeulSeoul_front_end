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
  SeparatorBtn,
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
  const [clicks, setClicks] = useState(true);
  const [likes, setLikes] = useState(false);
  const [news, setNews] = useState(false);
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
    let sort;
    if (clicks) sort = 'views,desc';
    else if (likes) sort = 'good,desc';
    else if (news) sort = 'date,desc';
    if (clicked > 0) {
      const local = [];
      const theme = [];
      for (let i = 0; i < localClicked.length; i += 1) {
        if (localClicked[i]) local.push(i + 1);
      }
      for (let i = 0; i < themeClicked.length; i += 1) {
        if (themeClicked[i]) theme.push(i + 26);
      }

      const data = { data: { local, theme }, sort };
      dispatch(LocalNThemeTagsSelected(data));
      console.log(data);
    }
  }, [clicked, news, likes, clicks]);

  // 태그 조건부 랜더링
  const tagSelectRender = (content) => {
    console.log(content);
    if (content === undefined || content.length === 0)
      return <NoResult>🙄 선택하신 태그를 가진 코스가 없어요.</NoResult>;
    return content.map((curation) => (
      <Wrapper elevation={0}>
        <ImageDiv>
          <CurationImage
            alt="profile_img"
            src={`http://13.124.34.5/api/v1/image/${curation.thumnail}`}
          />
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
  const clicksClicked = () => {
    setClicks(true);
    setLikes(false);
    setNews(false);
  };
  const likesClicked = () => {
    setClicks(false);
    setLikes(true);
    setNews(false);
  };
  const newClicked = () => {
    setClicks(false);
    setLikes(false);
    setNews(true);
  };
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
        <div>
          <div style={{ textAlign: 'end', margin: '1rem 5rem 2rem 0' }}>
            <SeparatorBtn type="submit" active={clicks} onClick={clicksClicked}>
              조회순
            </SeparatorBtn>
            <SeparatorBtn type="submit" active={likes} onClick={likesClicked}>
              좋아요
            </SeparatorBtn>
            <SeparatorBtn type="submit" active={news} onClick={newClicked}>
              최신순
            </SeparatorBtn>
          </div>
          <CurationGrid>
            <div>{tagSelectRender(tagsSelectedContent)}</div>
          </CurationGrid>
        </div>
      )}
    </div>
  );
}

export default MainPage;

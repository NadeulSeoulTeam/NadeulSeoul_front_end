import React from 'react';
import defaultPic from '../../../img/default_pic.png';
import StoreList from '../StoreList';
import TagList from '../TagList';
import UserList from '../UserList';
import CurationList from '../CurationList';
import SearchBar from '../../../common/SearchBar';

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

function MainPageView({
  localClicked,
  themeClicked,
  setLocalBoolean,
  setThemeBoolean,
  clicked,
  clicks,
  likes,
  news,
  open,
  tagsSelectedContent,
  selectCourse,
  handleOpen,
  clicksClicked,
  likesClicked,
  newClicked,
}) {
  const tagSelectRender = (content) => {
    console.log(content);
    if (content === undefined || content.length === 0)
      return <NoResult>🙄 선택하신 태그를 가진 코스가 없어요.</NoResult>;
    return content.map((curation) => (
      <Wrapper elevation={0} onClick={() => selectCourse(curation)}>
        <ImageDiv>
          {curation.thumnail !== null &&
          curation.thumnail !== undefined &&
          curation.thumnail !== 0 ? (
            <CurationImage
              alt="profile_img"
              src={`http://13.124.34.5/api/v1/image/${curation.thumnail}`}
            />
          ) : (
            <CurationImage alt="profile_img" src={defaultPic} />
          )}

          <LikeChip>👍{curation.good}</LikeChip>
        </ImageDiv>
        <CurationTitle>{curation.title}</CurationTitle>
      </Wrapper>
    ));
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

export default MainPageView;

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
      return <NoResult>π μ ννμ  νκ·Έλ₯Ό κ°μ§ μ½μ€κ° μμ΄μ.</NoResult>;
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

          <LikeChip>π{curation.good}</LikeChip>
        </ImageDiv>
        <CurationTitle>{curation.title}</CurationTitle>
      </Wrapper>
    ));
  };

  return (
    <div>
      <TopWrapper>
        <MainTitle>λλ€μμΈ</MainTitle>
        <SearchBar />
        <TagOpener onClick={handleOpen}>λλ¬μ μ½μ€ κ²μνκΈ°βΌ</TagOpener>
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
          <SubTitle>μ§κΈ HOTν μ½μ€</SubTitle>
          <CurationList />
          <SubTitle>μ΄μ μ μΈ λλ€λ¬</SubTitle>
          <UserList />
          <SubTitle>λλ€λ¬λ€μ΄ λ§μ΄ μ°ν μ₯μ</SubTitle>
          <StoreList />
        </BottomWrapper>
      ) : (
        <div>
          <div style={{ textAlign: 'end', margin: '1rem 5rem 2rem 0' }}>
            <SeparatorBtn type="submit" active={clicks} onClick={clicksClicked}>
              μ‘°νμ
            </SeparatorBtn>
            <SeparatorBtn type="submit" active={likes} onClick={likesClicked}>
              μ’μμ
            </SeparatorBtn>
            <SeparatorBtn type="submit" active={news} onClick={newClicked}>
              μ΅μ μ
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

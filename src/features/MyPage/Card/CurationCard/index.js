import React from 'react';
// import PropTypes from 'prop-types';

// style
import {
  Wrapper,
  ImageDiv,
  CurationImage,
  LikeChip,
  CurationTitle,
} from './styles';

// assets

function CurationCard({ thumbnail, title, good }) {
  return (
    // 여기서 상세 curation으로 onClick 매서드 사용해소 navigate로 이동
    <Wrapper elevation={0}>
      {/* <Wrapper elevation={0} onClick={() => selectCourse(curation)}> */}
      <ImageDiv>
        <CurationImage src={thumbnail} alt="default image" />
        <LikeChip>👍 {good}</LikeChip>
      </ImageDiv>
      <CurationTitle>{title}</CurationTitle>
    </Wrapper>
  );
}

export default CurationCard;

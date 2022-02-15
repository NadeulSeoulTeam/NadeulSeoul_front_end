import React from 'react';
import PropTypes from 'prop-types';

// style
import {
  Wrapper,
  ImageDiv,
  CurationImage,
  LikeChip,
  CurationTitle,
} from './styles';

function CurationCard({ imgUrl }) {
  return (
    // 여기서 상세 curaetion으로 onClick 매서드 사용해소 navgative로 이동
    <Wrapper elevation={0}>
      {/* <Wrapper elevation={0} onClick={() => selectCourse(curation)}> */}
      <ImageDiv>
        <CurationImage src={imgUrl} alt="default image" />
        <LikeChip>👍 22</LikeChip>
      </ImageDiv>
      <CurationTitle>코스</CurationTitle>
    </Wrapper>
  );
}

CurationCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default CurationCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

// style
import {
  Wrapper,
  ImageDiv,
  CurationImage,
  LikeChip,
  CurationTitle,
} from './styles';

// assets

function CurationCard({ thumnail, title, good, curationSeq }) {
  const navigate = useNavigate();
  const onClickGotoMyCuration = () => {
    console.log(curationSeq);
    navigate(`/courseview/${curationSeq}`);
  };
  return (
    // 여기서 상세 curation으로 onClick 매서드 사용해소 navigate로 이동
    <Wrapper elevation={0} onClick={onClickGotoMyCuration}>
      {/* <Wrapper elevation={0} onClick={() => selectCourse(curation)}> */}
      <ImageDiv>
        <CurationImage
          src={`http://13.124.34.5/api/v1/image/${thumnail}`}
          alt="default image"
        />
        <LikeChip>👍 {good}</LikeChip>
      </ImageDiv>
      <CurationTitle>{title}</CurationTitle>
    </Wrapper>
  );
}

export default CurationCard;

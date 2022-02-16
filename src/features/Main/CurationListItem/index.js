import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// custom style
import {
  Wrapper,
  ImageDiv,
  CurationImage,
  LikeChip,
  CurationTitle,
} from './styles';

// action
import { select } from '../MainSlice';

import sampleImg from '../nongdam.png';

function CurationListItem({ curation }) {
  const dispatch = useDispatch();

  const selectCourse = (selectedCourse) => {
    dispatch(select(selectedCourse));
  };

  useEffect(() => {
    console.log(curation, '여기만 잘된다면...');
  }, []);

  return (
    <Wrapper elevation={0} onClick={() => selectCourse(curation)}>
      <ImageDiv>
        <CurationImage
          // src={`http://localhost:8080/api/v1/image/${curation.thumbnail}`}
          src={sampleImg}
          alt="default image"
        />
        <LikeChip>👍 {curation.good}</LikeChip>
      </ImageDiv>
      <CurationTitle>{curation.title}</CurationTitle>
    </Wrapper>
  );
}

export default CurationListItem;

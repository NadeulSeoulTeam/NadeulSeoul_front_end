/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import defaultPic from '../../../img/default_pic.png';
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

function CurationListItem({ curation }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectCourse = (selectedCourse) => {
    dispatch(select(selectedCourse));
    console.log(curation);
    navigate(`/courseview/${curation.curationSeq}`);
  };

  useEffect(() => {
    console.log(curation);
  }, []);

  return (
    <Wrapper elevation={0} onClick={() => selectCourse(curation)}>
      <ImageDiv>
        {curation.thumnail !== undefined &&
        curation.thumnail !== 0 &&
        curation.thumnail !== null ? (
          <CurationImage
            // src={`http://localhost:8080/api/v1/image/${curation.thumbnail}`}
            src={`http://13.124.34.5/api/v1/image/${curation.thumnail}`}
            alt="default image"
          />
        ) : (
          <CurationImage
            // src={`http://localhost:8080/api/v1/image/${curation.thumbnail}`}
            src={defaultPic}
            alt="default image"
          />
        )}

        <LikeChip>👍 {curation.good}</LikeChip>
      </ImageDiv>
      <CurationTitle>{curation.title}</CurationTitle>
    </Wrapper>
  );
}

export default CurationListItem;

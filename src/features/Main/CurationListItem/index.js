import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// custom style
import { Wrapper, CurationImage, LikeChip, CurationTitle } from './styles';

// action
import { select } from '../MainSlice';

function CurationListItem({ curation }) {
  const dispatch = useDispatch();

  const selectCourse = (selectedCourse) => {
    dispatch(select(selectedCourse));
  };

  useEffect(() => {
    // console.log(curation);
  }, []);

  return (
    <Wrapper elevation={0} onClick={() => selectCourse(curation)}>
      <CurationImage>
        <LikeChip>👍 {curation.likes}</LikeChip>
      </CurationImage>
      <CurationTitle>{curation.title}</CurationTitle>
    </Wrapper>
  );
}

export default CurationListItem;

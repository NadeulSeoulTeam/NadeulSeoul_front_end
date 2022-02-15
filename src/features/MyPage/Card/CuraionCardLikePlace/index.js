/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

// custom style

import { StoreName, Address, StoreInfo } from './styles';

// actions
import { setMyCourse, deleteMyCourse } from '../../MyPageSlice';

function CuraionCardLikePlace({
  storeName,
  addressName,
  categoryName,
  storeSeq,
}) {
  const [isClicked, setIsClicked] = useState(true);
  const dispatch = useDispatch();
  const { myCourse } = useSelector((state) => state.mypage);
  console.log(typeof myCourse.length, myCourse.length, myCourse);

  // 정리 4 onClick 이벤트 분기 , 알고리즘
  const onClickCourseMakeUnderSix = () => {
    setIsClicked((prev) => !prev);
    if (isClicked === true) {
      dispatch(setMyCourse(storeSeq));
    } else {
      dispatch(deleteMyCourse(storeSeq));
    }
  };

  const onClickCourseMakeOverSix = () => {
    if (isClicked === true) {
      alert('7개 이상 담을 수 없습니다.');
    }
    setIsClicked(true);
    dispatch(deleteMyCourse(storeSeq));
  };

  return (
    // 여기서 상세 curaetion으로 onClick 매서드

    <Card
      sx={{
        maxWidth: 300,
        width: '25%',
        p: 1,
        m: 1,
      }}
    >
      <CardActionArea>
        {/* <CardMedia component="img" height="140" image={imgUrl} alt="test" /> */}
        <CardContent>
          <StoreName>{storeName}</StoreName>
          <Address>{addressName}</Address>
          <StoreInfo>{categoryName}</StoreInfo>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={
            myCourse.length > 5
              ? onClickCourseMakeOverSix
              : onClickCourseMakeUnderSix
          }
          size="small"
          color="primary"
        >
          {isClicked ? '추가' : '삭제'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CuraionCardLikePlace;

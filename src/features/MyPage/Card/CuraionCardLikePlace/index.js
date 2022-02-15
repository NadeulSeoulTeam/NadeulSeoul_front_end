import React, { useCallback, useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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
  likeplaceId,
}) {
  const [isClicked, setIsClicked] = useState(true);
  const dispatch = useDispatch();
  console.log('isClicked', isClicked);
  const onClickCourseMake = useCallback(() => {
    setIsClicked((prev) => !prev);
    if (isClicked === true) {
      dispatch(setMyCourse(likeplaceId));
    } else {
      dispatch(deleteMyCourse(likeplaceId));
    }
  }, [isClicked]);

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
        <Button onClick={onClickCourseMake} size="small" color="primary">
          {isClicked ? '추가' : '삭제'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CuraionCardLikePlace;

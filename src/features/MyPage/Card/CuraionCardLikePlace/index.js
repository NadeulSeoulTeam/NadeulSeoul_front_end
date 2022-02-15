import React, { useCallback, useState } from 'react';
// import PropTypes from 'prop-types';

// mui
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import { Button } from '@mui/material';

// custom style

import {
  Wrapper,
  StoreName,
  Address,
  StoreInfo,
  BtnExplain,
  CartBtn,
} from './styles';

function CuraionCardLikePlace({ storeName, addressName, categoryName }) {
  const [isClicked, setIsClicked] = useState(false);

  const onClickCourseMake = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  return (
    // 여기서 상세 curaetion으로 onClick 매서드

    <Wrapper
      elevation={1}
      // onClick={() => selectCourse(curation)}
    >
      {/* <CardMedia component="img" height="140" image={imgUrl} alt="test" /> */}
      <StoreName>{storeName}</StoreName>
      <Address>{addressName}</Address>
      <StoreInfo>{categoryName}</StoreInfo>
      <BtnExplain>눌러서 내 코스에 담기</BtnExplain>
      <CartBtn active={isClicked} onClick={onClickCourseMake}>
        🛒
      </CartBtn>
      {/* <Button onClick={onClickCourseMake} size="small" color="primary">
        // {isClicked ? '추가' : '삭제'}
        //{' '}
      </Button> */}
    </Wrapper>

    // <Card
    //   sx={{
    //     maxWidth: 300,
    //     width: '25%',
    //     p: 1,
    //     m: 1,
    //   }}
    // >
    //   <CardActionArea>
    //     <CardContent>
    //       <StoreName>{storeName}</StoreName>
    //       <Address>{addressName}</Address>
    //       <StoreInfo>{categoryName}</StoreInfo>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button onClick={onClickCourseMake} size="small" color="primary">
    //       {isClicked ? '추가' : '삭제'}
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}

export default CuraionCardLikePlace;

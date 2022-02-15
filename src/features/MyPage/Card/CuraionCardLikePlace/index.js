import React from 'react';
// import PropTypes from 'prop-types';

// mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// custom style

import { StoreName, Address, StoreInfo } from './styles';

function CurationCard({ storeName, addressName, categoryName }) {
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
    </Card>
  );
}

export default CurationCard;

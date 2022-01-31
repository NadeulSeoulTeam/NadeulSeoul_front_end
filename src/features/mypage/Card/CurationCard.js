import React from 'react';
import PropTypes from 'prop-types';

// mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// assets

function CurationCard({ imgUrl }) {
  console.log(imgUrl);
  return (
    // 여기서 상세 curaetion으로 onClick 매서드 사용해소 navgative로 이동
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="test_woori"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            코스
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CurationCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default CurationCard;

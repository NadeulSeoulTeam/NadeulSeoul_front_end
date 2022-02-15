import React from 'react';
// import PropTypes from 'prop-types';

// mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// assets

function CurationCard({ thumnail, title }) {
  return (
    // 여기서 상세 curaetion으로 onClick 매서드 사용해소 navgative로 이동
    <Card
      sx={{
        maxWidth: 300,
        width: '25%',
        p: 1,
        m: 1,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {thumnail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CurationCard;

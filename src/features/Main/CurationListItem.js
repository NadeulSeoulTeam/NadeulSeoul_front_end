import React, { useEffect } from 'react';

// material ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CurationListItem({ curation }) {
  useEffect(() => {
    console.log(curation);
  }, []);

  return (
    <Card>
      <Box
        sx={{
          width: '15vw',
          height: '15vw',
          backgroundColor: '#c4c4c4',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Typography
          variant="overline"
          display="block"
          style={{ position: 'absolute', right: 0 }}
        >
          👍 {curation.likes}
        </Typography>
      </Box>
      <CardContent sx={{ px: 0, py: 1 }}>
        <Typography variant="h5" component="div" sx={{ fontSize: '1em' }}>
          {curation.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CurationListItem;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocalTags, fetchThemeTags } from '../MainSlice';

function TagList() {
  const { localTag, themeTag } = useSelector((state) => state.main);
  const [localClicked, setLocalClicked] = useState();
  const [themeClicked, setThemeClicked] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setLocalClicked(localTag.map((local) => ({ local: false })));
    setThemeClicked({
      isClicked: Array(themeTag.length).fill(false),
    });
    console.log(localClicked, themeClicked);
  }, []);
  const regionTagList = () => {
    return localTag.map((region) => (
      <Box
        id={region.codeSeq}
        component="div"
        sx={{ display: 'inline', pr: 1 }}
      >
        {region.codeName}
      </Box>
    ));
  };
  const themeTagList = () => {
    return themeTag.map((theme) => (
      <Box id={theme.codeSeq} component="div" sx={{ display: 'inline', pr: 1 }}>
        {theme.codeName}
      </Box>
    ));
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        sx={{
          backgroundColor: '#ffffff',
          width: '70vw',
          textAlign: 'left',
        }}
      >
        <div>
          <p>지역 태그</p>
          {regionTagList()}

          <p>테마 태그</p>
          {themeTagList()}
        </div>
      </Paper>
    </Container>
  );
}

export default TagList;

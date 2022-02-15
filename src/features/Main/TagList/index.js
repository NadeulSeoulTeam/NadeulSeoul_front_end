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
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLocalClicked(Array(localTag.length).fill(false));
    setThemeClicked(Array(themeTag.length).fill(false));
  }, []);
  useEffect(() => {
    console.log(localClicked, themeClicked);
  }, [localClicked, themeClicked]);
  useEffect(() => {
    console.log(localClicked);
    console.log(themeClicked);
  }, [clicked]);
  const setLocalBoolean = (codeSeq) => {
    console.log(codeSeq);
    localClicked[codeSeq - 1] = !localClicked[codeSeq - 1];
    setLocalClicked(localClicked);
    setClicked(!clicked);
  };
  const setThemeBoolean = (codeSeq) => {
    console.log(codeSeq);
    themeClicked[codeSeq - 26] = !themeClicked[codeSeq - 26];
    setLocalClicked(themeClicked);
    setClicked(!clicked);
  };
  const regionTagList = () => {
    return localTag.map((region) => (
      <Box
        id={region.codeSeq}
        component="div"
        sx={{ display: 'inline', pr: 1 }}
      >
        <button type="submit" onClick={() => setLocalBoolean(region.codeSeq)}>
          {region.codeName}
        </button>
      </Box>
    ));
  };
  const themeTagList = () => {
    return themeTag.map((theme) => (
      <Box id={theme.codeSeq} component="div" sx={{ display: 'inline', pr: 1 }}>
        <button type="submit" onClick={() => setThemeBoolean(theme.codeSeq)}>
          {theme.codeName}
        </button>
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

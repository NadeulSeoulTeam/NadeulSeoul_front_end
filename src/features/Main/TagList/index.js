/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocalTags, fetchThemeTags } from '../MainSlice';
import { TextToggleBtn } from './styles';

function TagList({
  themeClicked,
  localClicked,
  setLocalBoolean,
  setThemeBoolean,
}) {
  const { localTag, themeTag } = useSelector((state) => state.main);
  // const [localClicked, setLocalClicked] = useState();
  // const [themeClicked, setThemeClicked] = useState();
  // const [clicked, setClicked] = useState(0);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setLocalClicked(Array(localTag.length).fill(false));
  //   setThemeClicked(Array(themeTag.length).fill(false));
  // }, []);
  // useEffect(() => {
  //   console.log(localClicked, themeClicked);
  // }, [localClicked, themeClicked]);
  // useEffect(() => {
  //   console.log(localClicked);
  //   console.log(themeClicked);
  //   console.log(clicked);
  // }, [clicked]);
  // const setLocalBoolean = (codeSeq) => {
  //   console.log(codeSeq);
  //   localClicked[codeSeq - 1] = !localClicked[codeSeq - 1];
  //   setLocalClicked(localClicked);
  //   if (localClicked[codeSeq - 1]) setClicked(clicked + 1);
  //   else setClicked(clicked - 1);
  // };
  // const setThemeBoolean = (codeSeq) => {
  //   console.log(codeSeq);
  //   themeClicked[codeSeq - 26] = !themeClicked[codeSeq - 26];
  //   setThemeClicked(themeClicked);
  //   if (themeClicked[codeSeq - 26]) setClicked(clicked + 1);
  //   else setClicked(clicked - 1);
  // };
  const regionTagList = () => {
    return localTag.map(
      (region) =>
        localClicked !== undefined && (
          <Box
            id={region.codeSeq}
            component="div"
            sx={{ display: 'inline', pr: 1 }}
          >
            <TextToggleBtn
              type="submit"
              active={!!localClicked[region.codeSeq - 1]}
              onClick={() => setLocalBoolean(region.codeSeq)}
            >
              {region.codeName}
            </TextToggleBtn>
          </Box>
        )
    );
  };
  const themeTagList = () => {
    return themeTag.map(
      (theme) =>
        themeClicked !== undefined && (
          <Box
            id={theme.codeSeq}
            component="div"
            sx={{ display: 'inline', pr: 1 }}
          >
            <TextToggleBtn
              type="submit"
              active={!!themeClicked[theme.codeSeq - 26]}
              onClick={() => setThemeBoolean(theme.codeSeq)}
            >
              {theme.codeName}
            </TextToggleBtn>
          </Box>
        )
    );
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

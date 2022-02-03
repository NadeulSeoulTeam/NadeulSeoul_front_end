import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// mui

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

// component
import ProfileCard from '../../Card/ProfileCard';

function BoardForm() {
  const [title, setTitle] = useState();
  const [context, setContext] = useState();

  const onChagneTitle = useCallback(
    (e) => {
      // console.log(e.target.value);
      setTitle(e.target.value);
    },
    [title]
  );

  const onChangeContext = useCallback(
    (e) => {
      // console.log(e.target.value);
      setContext(e.target.value);
    },
    [context]
  );

  const navigate = useNavigate();

  const onClickGoback = useCallback(() => {
    navigate(-1);
  }, []);

  console.log(title);
  console.log(context);

  return (
    <>
      <ProfileCard />
      <h2>문의 게시글 작성</h2>
      <Box
        sx={{
          width: '50%',
          maxWidth: '100%',
        }}
      >
        <TextField
          onChange={onChagneTitle}
          fullWidth
          value={title}
          label="제목"
          id="fullWidth"
        />
      </Box>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '70%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-multiline-static"
            label="내용"
            fullWidth
            multiline
            rows={8}
            size="medium"
            value={context}
            onChange={onChangeContext}
          />
        </div>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={onClickGoback}
          variant="contained"
          startIcon={<BackspaceIcon />}
        >
          Back
        </Button>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </>
  );
}

export default BoardForm;

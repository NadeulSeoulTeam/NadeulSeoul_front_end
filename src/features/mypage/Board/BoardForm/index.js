/* eslint-disable consistent-return */
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

// mui

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

// component

// actions
import { addPost, gobackToInquery } from '../../MyPageSlice';

function BoardForm() {
  const [title, setTitle] = useState();
  const [context, setContext] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myId = useParams().id;

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

  const onClickGoback = useCallback(() => {
    dispatch(gobackToInquery(3));
    navigate(-1);
  }, []);

  const onClickSend = useCallback(() => {
    if (!title || !title.trim()) {
      // sweet alert2 쓰면 좋을거 같음
      return alert('제목을 입력해주세요');
    }
    if (!context || !context.trim()) {
      return alert('내용을 입력해주세요');
    }
    console.log(myId, typeof myId);
    console.log(context, typeof context);
    console.log(title, typeof title);
    const data = {
      member_seq: myId,
      question_title: title,
      question_content: context,
      answer: '',
    };
    dispatch(addPost(data))
      .unwrap()
      .then(() => {
        toast.success('문의 게시글 작성 성공');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });

  return (
    <>
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
        <Button
          onClick={onClickSend}
          variant="contained"
          startIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
    </>
  );
}

export default BoardForm;

/* eslint-disable consistent-return */
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

// component

// actions
import { addPost } from '../../MyPageSlice';

function BoardForm() {
  const { userInfo } = useSelector((state) => state.mypage);
  const [title, setTitle] = useState();
  const [context, setContext] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myId = userInfo[0].id;

  const onChangeTitle = useCallback((e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  }, []);

  const onChangeContext = useCallback((e) => {
    // console.log(e.target.value);
    setContext(e.target.value);
  }, []);

  const onClickGoback = useCallback(() => {
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
      memberSeq: myId,
      questionTitle: title,
      question: context,
      answer: '',
    };
    console.log(data);
    dispatch(addPost(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    navigate(-1);
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
          onChange={onChangeTitle}
          fullWidth
          value={title}
          label="제목"
          id="fullWidth"
          autoFocus
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

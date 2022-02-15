/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

// actions

import {
  removePost,
  updatePost,
  loadBoardListItem,
} from '../../../MyPageSlice';

function BoardListItemQuestion({ questionTitle, question, PostId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserId, singlePost } = useSelector((state) => state.mypage);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(questionTitle);
  const [context, setContext] = useState(question);

  const onToggleChangeContent = () => {
    setEditMode((prev) => !prev);
    const data = { questionSeq: PostId, answer: '' };
    dispatch(loadBoardListItem(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const onClickGoback = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    dispatch(removePost(PostId))
      .unwrap()
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    console.log(PostId);
  };

  const onClickUpdate = () => {
    if (!context || !context.trim()) {
      return alert('내용을 입력해주세요');
    }
    if (!title || !title.trim()) {
      return alert('제목을 입력해주세요');
    }
    const data = {
      questionSeq: PostId,
      memberSeq: UserId,
      questionTitle: title,
      question: context,
      answer: '',
    };
    dispatch(updatePost(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeContext = (e) => {
    // console.log(e.target.value);
    setContext(e.target.value);
  };
  const onChangeTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  useEffect(() => {
    setTitle(singlePost?.questionTitle);
    setContext(singlePost?.question);
    console.log(title, context);
  }, []);
  return (
    <>
      {/* 1. 수정을 눌렀을 때만 textarea가 나타나야 함 -> 그 때 게시글 수정이 이루어짐 */}
      {/* 2. 그리고 수정을 누른후에는 수정버튼 send가 되어야 하고 그걸 누르면 다시 게시글 작성 request  */}
      {/* 3. 수정이 완료되면 다시 문의게시판으로 이동   */}
      <h2>문의 게시글</h2>
      {editMode ? (
        <>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '35%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="제목"
              variant="outlined"
              value={title}
              onChange={onChangeTitle}
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
        </>
      ) : (
        <>
          <h3>제목 : {questionTitle} </h3>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: '70%',
                height: 230,
              },
            }}
          >
            <Paper variant="outlined" square>
              {question}
            </Paper>
          </Box>
        </>
      )}

      <Stack direction="row" spacing={2}>
        <Button
          onClick={onClickGoback}
          variant="contained"
          startIcon={<BackspaceIcon />}
        >
          Back
        </Button>
        <Button
          onClick={onClickDelete}
          variant="contained"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        {editMode ? (
          <Button
            onClick={onClickUpdate}
            variant="contained"
            startIcon={<SendIcon />}
          >
            Send
          </Button>
        ) : (
          <Button
            onClick={onToggleChangeContent}
            variant="contained"
            startIcon={<BorderColorIcon />}
          >
            Update
          </Button>
        )}
      </Stack>
    </>
  );
}

export default BoardListItemQuestion;

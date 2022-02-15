/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

// actions

import {
  loadBoardListItem,
  addAnswer,
  updateAnswer,
  removeAnswer,
} from '../../../MyPageSlice';

function BoardListItemAnswer({ answer, PostId, isAdmin }) {
  const dispatch = useDispatch();
  const [editModeAnswer, seteditModeAnswer] = useState(false);
  const [reply, setReply] = useState(answer);

  const onToggleChangeAnswer = () => {
    seteditModeAnswer((prev) => !prev);
  };

  const onChangeAnswerContext = (e) => {
    setReply(e.target.value);
  };

  const onClickAnswerSend = () => {
    const data = { questionSeq: PostId, answer: reply };
    console.log(data);
    dispatch(addAnswer(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        console.log(data);
        dispatch(loadBoardListItem(data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onClickAnswerUpdate = async () => {
    if (!reply || !reply.trim()) {
      return alert('내용을 입력해주세요');
    }
    const data = { questionSeq: PostId, answer: reply };
    dispatch(updateAnswer(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        console.log(data);
        onToggleChangeAnswer();
        dispatch(loadBoardListItem(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickAnswerDelete = () => {
    dispatch(removeAnswer(PostId))
      .unwrap()
      .then(() => {
        const data = {
          questionSeq: PostId,
        };
        dispatch(loadBoardListItem(data));
      })
      .catch((error) => {
        console.log(error);
      });
    setReply('');
  };
  return (
    <>
      <h2>관리자 답변</h2>
      {/* 1. 이미 답변이 존재하면 수정, 삭제  / paper  */}
      {/* 2. 답변이 없다면 답변 작성하기만 / textarea */}

      {answer ? (
        editModeAnswer ? (
          <>
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
                  value={reply}
                  onChange={onChangeAnswerContext}
                />
              </div>
            </Box>
            {isAdmin && (
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={onClickAnswerUpdate}
                  variant="contained"
                  startIcon={<SendIcon />}
                >
                  Send
                </Button>
                <Button
                  onClick={onClickAnswerDelete}
                  variant="contained"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Stack>
            )}
          </>
        ) : (
          <>
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
                {answer}
              </Paper>
            </Box>
            {isAdmin && (
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={onToggleChangeAnswer}
                  variant="contained"
                  startIcon={<BorderColorIcon />}
                >
                  Update
                </Button>
                <Button
                  onClick={onClickAnswerDelete}
                  variant="contained"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Stack>
            )}
          </>
        )
      ) : (
        <>
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
                value={reply}
                onChange={onChangeAnswerContext}
              />
            </div>
          </Box>
          {isAdmin && (
            <Stack direction="row" spacing={2}>
              <Button
                onClick={onClickAnswerSend}
                variant="contained"
                startIcon={<BorderColorIcon />}
              >
                Send
              </Button>
              <Button
                onClick={onClickAnswerDelete}
                variant="contained"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Stack>
          )}
        </>
      )}
    </>
  );
}

export default BoardListItemAnswer;

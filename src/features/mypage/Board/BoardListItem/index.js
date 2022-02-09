/* eslint-disable no-unused-vars */
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
  addAnswer,
  updateAnswer,
  removeAnswer,
  loadBoardListItem,
} from '../../MyPageSlice';

function BoardListItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { PostId, UserId, singlePost } = useSelector((state) => state.mypage);
  const [editMode, setEditMode] = useState(false);
  const [editModeAnswer, seteditModeAnswer] = useState(false);
  const [title, setTitle] = useState(singlePost?.questionTitle);
  const [context, setContext] = useState(singlePost?.question);
  const [answer, setAnswer] = useState(singlePost?.answer);

  useEffect(async () => {
    const data = {
      questionSeq: PostId,
    };
    dispatch(loadBoardListItem(data));
  }, [PostId]);

  const onToggleChangeContent = () => {
    setEditMode((prev) => !prev);
  };

  const onToggleChangeAnswer = () => {
    seteditModeAnswer((prev) => !prev);
  };

  const onClickGoback = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    console.log('delete');
    // 삭제 요청
    dispatch(removePost(PostId))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    console.log(PostId);
    // 문의 게시판으로 redirect
    navigate(-1);
  };

  const onClickUpdate = () => {
    if (!context || !context.trim()) {
      return alert('내용을 입력해주세요');
    }
    navigate(-1);
    const data = {
      questionSeq: PostId,
      memberSeq: UserId,
      questionTitle: title,
      question: context,
      answer: singlePost.answer,
    };
    dispatch(updatePost(data))
      .unwrap()
      .then((response) => {
        console.log(response);
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

  const onChangeAnswerContext = (e) => {
    setAnswer(e.target.value);
  };

  const onClickAnswerSend = () => {
    const data = { questionSeq: PostId, answer };
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
    if (!answer || !answer.trim()) {
      return alert('내용을 입력해주세요');
    }
    const data = { questionSeq: PostId, answer };
    dispatch(updateAnswer(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        console.log(data);
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
    setAnswer('');
  };

  return (
    <>
      <h2>문의 게시글</h2>

      {/* 1. 수정을 눌렀을 때만 textarea가 나타나야 함 -> 그 때 게시글 수정이 이루어짐 */}
      {/* 2. 그리고 수정을 누른후에는 수정버튼 send가 되어야 하고 그걸 누르면 다시 게시글 작성 request  */}
      {/* 3. 수정이 완료되면 다시 문의게시판으로 이동   */}
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
          <h3>제목 : {singlePost?.questionTitle} </h3>
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
              {singlePost?.question}
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
      <h2>관리자 답변</h2>
      {/* 1. 이미 답변이 존재하면 수정, 삭제  / paper  */}
      {/* 2. 답변이 없다면 답변 작성하기만 / textarea */}

      {singlePost?.answer ? (
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
                  value={answer}
                  onChange={onChangeAnswerContext}
                />
              </div>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={onClickAnswerUpdate}
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
                {singlePost.answer}
              </Paper>
            </Box>
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
                value={answer}
                onChange={onChangeAnswerContext}
              />
            </div>
          </Box>
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
        </>
      )}
    </>
  );
}

export default BoardListItem;

// 답글 => 일단 댓글 처럼 구현하자

// 관리자를 어떻게 구분해야 할지,, 그걸 논의 해봐야겠음

// 추가로 구현해야 하는 부분
// 1. 답글은 관리자만 달 수 있음
// 2. 답글이 달린 게시글을 삭제 되면 안됨
// 3. 사용자는 답글을 수정, 삭제 할 수 없음(관리자만 가능)

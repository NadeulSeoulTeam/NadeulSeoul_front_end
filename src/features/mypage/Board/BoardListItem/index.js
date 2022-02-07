/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useCallback, useState, useEffect } from 'react';
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

import ProfileCard from '../../Card/ProfileCard';

// actions

import {
  gobackToInquery,
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
  const [context, setContext] = useState(singlePost.question_content);
  const [answer, setAnswer] = useState(singlePost.answer);

  const onToggleChangeContent = useCallback(() => {
    setEditMode((prev) => !prev);
  });

  const onToggleChangeAnswer = useCallback(() => {
    seteditModeAnswer((prev) => !prev);
  });

  const onClickGoback = useCallback(() => {
    dispatch(gobackToInquery(3));
    navigate(-1);
  }, []);

  const onClickDelete = useCallback(() => {
    console.log('delete');
    // 삭제 요청
    dispatch(removePost(PostId));
    console.log(PostId);
    // 문의 게시판으로 redirect
    dispatch(gobackToInquery(3));
    navigate(-1);
  }, []);

  const onClickUpdate = useCallback(() => {
    if (!context || !context.trim()) {
      return alert('내용을 입력해주세요');
    }
    console.log('수정 reqeust');
    dispatch(gobackToInquery(3));
    navigate(-1);
    console.log(context, typeof context);
    dispatch(
      updatePost({
        question_seq: PostId,
        member_seq: UserId,
        // 제목도 수정 추가해야 함
        question_content: context,
        answer: singlePost.answer,
      })
    );
    // 직렬화 여부
    // JSON.stringify({
    //   member_seq: myId,
    //   question_title: title,
    //   question_content: context,
    //   question_date: nowTime,
    // })
    // );
  });

  const onChangeContext = useCallback(
    (e) => {
      // console.log(e.target.value);
      setContext(e.target.value);
    },
    [context]
  );

  const onChangeAnswerContext = useCallback(
    (e) => {
      setAnswer(e.target.value);
    },
    [answer]
  );

  const onClickAnswerSend = useCallback(() => {
    console.log('답변 작성 서버 전송');
    dispatch(
      addAnswer({
        question_seq: PostId,
        answer,
      })
    );
  }, []);

  const onClickAnswerUpdate = useCallback(() => {
    console.log('답변 수정 서버 전송');
    if (!answer || !answer.trim()) {
      return alert('내용을 입력해주세요');
    }
    dispatch(
      updateAnswer({
        question_seq: PostId,
        answer,
      })
    );
  });

  const onClickAnswerDelete = useCallback(() => {
    console.log('답변 삭제 서버 전송');
    dispatch(removeAnswer(PostId));
  }, []);

  // useEffect로 이 페이지 오자마자 Read요청 =>해당 정보를 disptach로 요청
  // 지금 {siglePost.~} 쓰이는 것들 처리하면 됨
  useEffect(() => {
    dispatch(loadBoardListItem(PostId));
  }, [PostId]);
  return (
    <>
      <ProfileCard />
      <h2>문의 게시글</h2>
      <h3>제목 : {singlePost.question_title} </h3>

      {/* 1. 수정을 눌렀을 때만 textarea가 나타나야 함 -> 그 때 게시글 수정이 이루어짐 */}
      {/* 2. 그리고 수정을 누른후에는 수정버튼 send가 되어야 하고 그걸 누르면 다시 게시글 작성 request  */}
      {/* 3. 수정이 완료되면 다시 문의게시판으로 이동   */}
      {editMode ? (
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
      ) : (
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
            {singlePost.question_content}
          </Paper>
        </Box>
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

      {singlePost.answer ? (
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
      )}

      {/* {singlePost.answer ? (
        (!editModeAnswer && (
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
        ),
        editModeAnswer && (
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
        ))
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
          <Button
            onClick={onClickAnswerSend}
            variant="contained"
            startIcon={<SendIcon />}
          >
            Send
          </Button>
        </>
      )} */}
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

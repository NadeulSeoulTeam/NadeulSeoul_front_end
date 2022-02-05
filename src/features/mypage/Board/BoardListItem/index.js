/* eslint-disable consistent-return */
import React, { useCallback, useState } from 'react';
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

import { gobackToInquery, removePost } from '../../MyPageSlice';

function BoardListItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { PostId, singlePost } = useSelector((state) => state.mypage);
  const [editMode, setEditMode] = useState(false);
  const [context, setContext] = useState(singlePost.question_content);

  const onToggleChangeContent = useCallback(() => {
    setEditMode((prev) => !prev);
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

  const onClickSend = useCallback(() => {
    if (!context || !context.trim()) {
      return alert('내용을 입력해주세요');
    }
    console.log('수정 reqeust');
    dispatch(gobackToInquery(3));
    navigate(-1);
    console.log(context, typeof context);
    // dispatch(
    //   addPost({
    //     member_seq: myId,
    //     question_content: context,
    //   })
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

  // useEffect로 이 페이지 오자마자 해당 정보를 disptach로 요청
  // 받은 정보를 아래에서 사용하면 됨.
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
            onClick={onClickSend}
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

export default BoardListItem;

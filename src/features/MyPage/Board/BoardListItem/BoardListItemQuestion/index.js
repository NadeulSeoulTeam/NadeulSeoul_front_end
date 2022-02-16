/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// mui
import {
  QuestionTitle,
  QuestionContent,
  Underline,
  GreenBtn,
  GreyBtn,
  TextInput,
} from './styles';

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
      {editMode ? (
        <>
          <QuestionTitle style={{ paddingBottom: '0', marginBottom: '8px' }}>
            제목
          </QuestionTitle>
          <TextInput
            size="small"
            placeholder="제목"
            value={title}
            onChange={onChangeTitle}
          />
          <Underline />
          <QuestionTitle style={{ paddingBottom: '0', marginBottom: '8px' }}>
            내용
          </QuestionTitle>
          <TextInput
            size="small"
            multiline
            rows={5}
            placeholder="내용"
            value={context}
            onChange={onChangeContext}
          />
        </>
      ) : (
        <>
          <QuestionTitle>{questionTitle}</QuestionTitle>
          <Underline />
          <QuestionContent>{question}</QuestionContent>
        </>
      )}

      {editMode ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            marginTop: '1.5rem',
          }}
        >
          <GreyBtn onClick={onClickGoback}>뒤로가기</GreyBtn>
          <GreyBtn onClick={onClickDelete}>삭제하기</GreyBtn>
          <GreenBtn onClick={onClickUpdate}>작성하기</GreenBtn>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            marginTop: '1.5rem',
          }}
        >
          <GreyBtn onClick={onClickGoback}>뒤로가기</GreyBtn>
          <GreyBtn onClick={onClickDelete}>삭제하기</GreyBtn>
          <GreenBtn onClick={onToggleChangeContent}>수정하기</GreenBtn>
        </div>
      )}
    </>
  );
}

export default BoardListItemQuestion;

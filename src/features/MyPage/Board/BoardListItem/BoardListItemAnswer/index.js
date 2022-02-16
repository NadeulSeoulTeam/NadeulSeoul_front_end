/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// styles
import {
  AnswerTitle,
  Underline,
  AnswerContent,
  GreenBtn,
  GreyBtn,
  TextInput,
} from './styles';

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
      {/* 1. 이미 답변이 존재하면 수정, 삭제  / paper  */}
      {/* 2. 답변이 없다면 답변 작성하기만 / textarea */}

      {answer ? (
        editModeAnswer ? (
          <>
            <AnswerTitle>관리자 답변</AnswerTitle>
            <Underline />
            <AnswerTitle style={{ paddingBottom: '0', marginBottom: '8px' }}>
              내용
            </AnswerTitle>
            <TextInput
              size="small"
              multiline
              rows={5}
              placeholder="내용"
              value={reply}
              onChange={onChangeAnswerContext}
            />
            {isAdmin && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  marginTop: '1.5rem',
                }}
              >
                <GreyBtn onClick={onClickAnswerDelete}>삭제하기</GreyBtn>
                <GreenBtn onClick={onClickAnswerUpdate}>작성하기</GreenBtn>
              </div>
            )}
          </>
        ) : (
          <>
            <AnswerTitle>관리자 답변</AnswerTitle>
            <Underline />
            <AnswerContent>{answer}</AnswerContent>
            {isAdmin && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  marginTop: '1.5rem',
                }}
              >
                <GreyBtn onClick={onClickAnswerDelete}>삭제하기</GreyBtn>
                <GreenBtn onClick={onToggleChangeAnswer}>수정하기</GreenBtn>
              </div>
            )}
          </>
        )
      ) : (
        <>
          <AnswerTitle>관리자 답변</AnswerTitle>
          <Underline />
          <AnswerTitle style={{ paddingBottom: '0', marginBottom: '8px' }}>
            내용
          </AnswerTitle>
          <TextInput
            size="small"
            multiline
            rows={5}
            placeholder="내용"
            value={reply}
            onChange={onChangeAnswerContext}
          />
          {isAdmin && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                marginTop: '1.5rem',
              }}
            >
              <GreyBtn onClick={onClickAnswerDelete}>삭제하기</GreyBtn>
              <GreenBtn onClick={onClickAnswerSend}>작성하기</GreenBtn>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default BoardListItemAnswer;

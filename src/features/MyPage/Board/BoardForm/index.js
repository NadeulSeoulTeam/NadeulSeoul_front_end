/* eslint-disable consistent-return */
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Container,
  Header,
  RowDiv,
  SubTitle,
  Content,
  GreenBtn,
  GreyBtn,
} from './styles';

// component

// actions
import { addPost } from '../../MyPageSlice';

// cookie
import { getUserInfo } from '../../../../common/api/JWT-Token';

function BoardForm() {
  const [title, setTitle] = useState();
  const [context, setContext] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myId = getUserInfo().userSeq;

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
        navigate(-1);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });

  return (
    <Container>
      <Header>문의 게시글 작성</Header>
      <RowDiv>
        <SubTitle>제목</SubTitle>
        <Content
          onChange={onChangeTitle}
          style={{ minWidth: '50vw' }}
          placeholder="제목을 적어주세요."
        />
      </RowDiv>
      <RowDiv>
        <SubTitle>내용</SubTitle>
        <Content
          multiline
          rows={8}
          value={context}
          style={{ minWidth: '50vw' }}
          onChange={onChangeContext}
          placeholder="내용을 적어주세요."
        />
      </RowDiv>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <GreyBtn onClick={onClickGoback}>뒤로가기</GreyBtn>
        <GreenBtn onClick={onClickSend}>작성하기</GreenBtn>
      </div>
    </Container>
  );
}

export default BoardForm;

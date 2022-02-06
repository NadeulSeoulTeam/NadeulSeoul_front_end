// import React from 'react';
import React, { useState } from 'react';

import Picker from 'emoji-picker-react';

import {
  Container,
  MainTitle,
  SubTitle,
  InputLabel,
  InputLabelGreen,
  TextInput,
  GreenBtn,
  VerticalDiv,
  // EmojiInput,
} from './styles';

function UserForm() {
  const [emoji, setEmoji] = useState('');

  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject);
    setEmoji(emojiObject.emoji);
  };

  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      <SubTitle>회원가입</SubTitle>
      <VerticalDiv>
        <div style={{ margin: '10px 0' }}>
          <InputLabelGreen>*</InputLabelGreen>
          <InputLabel>닉네임</InputLabel>
        </div>
        <div style={{ margin: '10px 0' }}>
          <InputLabelGreen>*</InputLabelGreen>
          <InputLabel>이모지</InputLabel>
        </div>
      </VerticalDiv>
      <VerticalDiv>
        <TextInput variant="outlined" placeholder="닉네임을 입력해주세요." />
        <TextInput
          variant="outlined"
          disabled
          value={emoji}
          placeholder="이모지를 골라주세요."
        />
        <Picker onEmojiClick={onEmojiClick} />
      </VerticalDiv>
      <GreenBtn>이대로 계정 생성하기</GreenBtn>
    </Container>
  );
}

export default UserForm;

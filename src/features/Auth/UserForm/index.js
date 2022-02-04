import React from 'react';
// import React, { useState } from 'react';

// import InputEmoji from 'react-input-emoji';

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
  // const [emoji, setEmoji] = useState('');

  // const handleOnEnter = (text) => {
  //   console.log('enter', text);
  // };

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
        {/* <EmojiInput
          value={emoji}
          onChange={setEmoji}
          onEnter={handleOnEnter}
          maxLength={1}
          height={56}
          borderRadius={15}
          borderColor="#0de073"
          fontFamily="Suit"
          placeholder="이모지를 하나 선택하세요."
        /> */}
        <TextInput variant="outlined" />
      </VerticalDiv>
      <GreenBtn>이대로 계정 생성하기</GreenBtn>
    </Container>
  );
}

export default UserForm;

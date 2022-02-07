import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from '../AuthSlice';
// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

import {
  Container,
  MainTitle,
  SubTitle,
  InputLabel,
  InputLabelGreen,
  TextInput,
  GreenBtn,
  VerticalDiv,
  EmojiPicker,
} from './styles';

function UserForm() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [emoji, setEmoji] = useState('');

  const onNicknameChange = (event) => {
    setNickname(event.currentTarget.value);
    console.log(nickname);
  };

  const onEmojiClick = (event) => {
    console.log(event);
    setEmoji(event.native);
  };

  // 여기 아직 안 끝남!!! 중복확인은?
  const data = {
    nickname,
    emoji,
  };
  const onInputSuccess =
    (() => {
      dispatch(signup(data));
    },
    [data]);

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
        <TextInput
          variant="outlined"
          value={nickname}
          onChange={onNicknameChange}
          placeholder="닉네임을 입력해주세요."
        />
        <TextInput
          variant="outlined"
          disabled
          value={emoji}
          placeholder="아래에서 이모지를 골라주세요."
        />
      </VerticalDiv>
      <div>
        <EmojiPicker
          onSelect={onEmojiClick}
          color="#0de073"
          title={false}
          emoji="green_apple"
          style={{ fontFamily: 'Suit' }}
        />
      </div>
      <GreenBtn onClick={onInputSuccess}>이대로 계정 생성하기</GreenBtn>
    </Container>
  );
}

export default UserForm;

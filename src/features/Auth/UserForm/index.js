import React from 'react';

import {
  Container,
  MainTitle,
  SubTitle,
  InputLabel,
  InputLabelGreen,
  TextInput,
} from './styles';

function UserForm() {
  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      <SubTitle>회원가입</SubTitle>
      <div>
        <InputLabelGreen>*</InputLabelGreen>
        <InputLabel>닉네임</InputLabel>
        <TextInput variant="outlined" placeholder="닉네임을 입력해주세요." />
      </div>
      <div>
        <InputLabelGreen>*</InputLabelGreen>
        <InputLabel>이모지</InputLabel>
        <TextInput variant="outlined" />
      </div>
    </Container>
  );
}

export default UserForm;

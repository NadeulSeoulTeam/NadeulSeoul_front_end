import React from 'react';

// custom style
import {
  Container,
  MainTitle,
  GoogleButton,
  NaverButton,
  GoogleIcon,
  NaverIcon,
  ButtonText,
} from './styles';

function SignIn() {
  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      <GoogleButton href="http://localhost:8080/oauth2/authorization/google">
        <GoogleIcon />
        <ButtonText>구글 계정으로 회원가입</ButtonText>
      </GoogleButton>
      <NaverButton>
        <NaverIcon />
        <ButtonText>네이버 계정으로 회원가입</ButtonText>
      </NaverButton>
    </Container>
  );
}

export default SignIn;

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
  const popupOpen = () => {
    window.open(
      'http://localhost:8080/oauth2/authorization/google',
      'Google Login',
      'width=400px, height=600px, scrollbars=yes'
    );
  };

  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      <GoogleButton href="#" onClick={popupOpen}>
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

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
  // const popupOpen = () => {
  //   window.open(
  //     'http://localhost:8080/oauth2/authorization/google',
  //     'Google Login',
  //     'width=400px, height=600px, scrollbars=yes'
  //   );
  // };

  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      {/* <GoogleButton href="#" onClick={popupOpen}> */}
      <GoogleButton href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect">
        <GoogleIcon />
        <ButtonText>구글 계정으로 이용하기</ButtonText>
      </GoogleButton>
      <NaverButton>
        <NaverIcon />
        <ButtonText>네이버 계정으로 이용하기</ButtonText>
      </NaverButton>
    </Container>
  );
}

export default SignIn;

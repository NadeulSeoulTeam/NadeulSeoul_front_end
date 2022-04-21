import React from 'react';

// custom style
import {
  Container,
  MainTitle,
  GoogleButton,
  GoogleIcon,
  ButtonText,
  Explanation,
} from './styles';

function SignIn() {
  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      {/* <GoogleButton href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect"> */}
      <GoogleButton>
        <GoogleIcon />
        <ButtonText>구글 계정으로 이용하기</ButtonText>
      </GoogleButton>
      <Explanation>😅 지금은 구글 로그인만 지원해요!</Explanation>
    </Container>
  );
}

export default SignIn;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin } from '../AuthSlice';

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
  const dispatch = useDispatch();
  const { clientId, scope } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(clientId);
    console.log(scope);
  }, [clientId, scope]);

  const googleLoginHandler = () => {
    console.log('잘들어감');
    dispatch(googleLogin());
    // const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=http://localhost:3000/oauth/redirect&response_type=code&scope=${scope}`;
    // window.open(GOOGLE_LOGIN_URL);
  };

  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      {/* <GoogleButton href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect"> */}
      <GoogleButton onClick={googleLoginHandler}>
        <GoogleIcon />
        <ButtonText>구글 계정으로 이용하기</ButtonText>
      </GoogleButton>
      <Explanation>😅 지금은 구글 로그인만 지원해요!</Explanation>
    </Container>
  );
}

export default SignIn;

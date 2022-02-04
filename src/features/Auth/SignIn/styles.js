import styled from 'styled-components';
import googleLogo from './google-logo.png';
import naverLogo from './naver-logo.png';

export const Container = styled.div`
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-family: 'Hahmlet';
  font-size: 48px;
  color: #0de073;
  padding: 25vh 0 10vh 0;
  margin: 0;
`;

export const GoogleButton = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  background: white;
  color: #222222;
  width: 260px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  margin: 0 auto 20px auto;
`;

export const GoogleIcon = styled.div`
  display: inline;
  background-image: url(${googleLogo});
  background-size: 35px;
  width: 35px;
  height: 35px;
  vertical-align: middle;
  margin: 0 10px 0 15px;
`;

export const ButtonText = styled.p`
  display: inline-block;
  margin: 0 10px;
`;

export const NaverButton = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  background: #00c73c;
  color: white;
  width: 260px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  margin: 0 auto 0 auto;
`;

export const NaverIcon = styled.div`
  display: inline;
  background-image: url(${naverLogo});
  background-size: 55px;
  width: 55px;
  height: 55px;
  vertical-align: middle;
  margin: 0 0 0 5px;
`;

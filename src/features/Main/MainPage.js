import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { StylesProvider } from '@material-ui/core';

export const MainTitle = styled.h1`
  font-family: 'Hahmlet';
  font-size: 48px;
  text-align: center;
  color: #68c78e;
`;

export const GreenBtn = styled(Button)`
  font-family: 'Suit';
  font-weight: bold;
  background-color: #68c78e;
  padding: 12px 24px;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  border: none;
`;

function MainPage() {
  return (
    <div>
      <MainTitle>나들서울</MainTitle>
      <GreenBtn>현재 위치 기준으로 보기</GreenBtn>
    </div>
  );
}

export default MainPage;

import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { StylesProvider } from '@mui/styles';

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

export default function StyledComponents() {
  return (
    <StylesProvider injectFirst>
      <GreenBtn />
    </StylesProvider>
  );
}

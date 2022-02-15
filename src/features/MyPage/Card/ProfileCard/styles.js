/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import Button from '@mui/material/Button';

export const GreenBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    margin: 20px;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: #06d469;
    }
  }
`;

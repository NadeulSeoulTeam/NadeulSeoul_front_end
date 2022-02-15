/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export const CourseCard = styled(Card)`
  && {
    width: 220px;
    height: 480px;
    padding: 1.5rem;
    position: absolute;
    z-index: 3;
    top: 40px;
    background-color: white;
    border-radius: 20px 0 0 20px;
    right: 0;
    overflow: hidden;
  }
`;

export const Header = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 auto 1.5rem auto;
  text-align: center;
`;

export const InfoMsg = styled.p`
  font-size: 0.8rem;
  color: #c4c4c4;
  margin-top: 10rem;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0px;
  padding: 0px;
`;

export const GreenBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
    position: absolute;
    width: 180px;
    left: 50%;
    bottom: 1.5rem;
    transform: translate(-50%, 0%);
    &.Mui-disabled {
      background-color: #fafafa;
    }
  }
`;

/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';

export const Cart = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 2;
  top: 190px;
  right: 0;
  border-radius: 20px 0 0 20px;
`;

export const DetailCard = styled(Card)`
  && {
    position: relative;
    border-radius: 20px 0 0 20px;
  }
`;

export const Map = styled.div`
  opacity: ${(props) => (props.clicked === undefined ? 1 : 0.7)};
`;

export const CardHeader = styled.div`
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 0 0.5rem 0;
  color: #0de073;
`;

export const CardScript = styled.div`
  position: relative;
  padding: 3px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
`;

export const CloseBtn = styled(CloseIcon)`
  position: absolute;
  margin: 5px;
  top: 0.5rem;
  right: 0.5rem;
  color: #c4c4c4;
  cursor: pointer;
`;

export const BtnExplain = styled.span`
  position: absolute;
  right: 3rem;
  bottom: 1rem;
  font-size: 0.7rem;
  color: #c4c4c4;
`;

export const StarBtn = styled.button`
  position: absolute;
  right: 0.5rem;
  bottom: 1rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: transparent;
  box-shadow: none;
  z-index: 3;
  text-align: center;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }};
`;

export const CourseTitle = styled.div`
  position: absolute;
  top: 25px;
  left: 60px;
  background-color: #0de073;
  color: white;
  font-family: 'Hahmlet';
  font-weight: bold;
  font-size: 1.2rem;
  padding: 8px 20px;
  border-radius: 30px;
  z-index: 2;
`;

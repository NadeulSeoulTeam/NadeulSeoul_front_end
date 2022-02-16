import styled from 'styled-components';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ArrowBack = styled(ArrowBackIosIcon)`
  z-index: 2;
  position: absolute;
  left: 7%;
  bottom: 10%;
  &:hover {
    cursor: pointer;
  }
`;

export const ArrowForward = styled(ArrowForwardIosIcon)`
  z-index: 2;
  position: absolute;
  right: 7%;
  bottom: 10%;
  &:hover {
    cursor: pointer;
  }
`;

export const List = styled.div`
  width: 77%;
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: 1%;
  left: 11%;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

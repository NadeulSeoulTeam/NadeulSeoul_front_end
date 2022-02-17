import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const ImgDisplay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  // boxShadow: 24px;
  padding: 4px;
`;

export const LeftBtn = styled(ChevronLeftIcon)`
  && {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: #0de073;
    cursor: pointer;
  }
`;

export const RightBtn = styled(ChevronRightIcon)`
  && {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: #0de073;
    cursor: pointer;
  }
`;
